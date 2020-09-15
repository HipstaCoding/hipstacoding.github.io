import hardtekLife from "../music/track.mp3";

const FFT_SIZE = 256;

export class Track {
	isPlaying = false;

	constructor(url) {
		this.url = url;
		this.context = new (window.AudioContext ||
			window.webkitAudioContext)();

		this.analyser = this.context.createAnalyser();
		this.gainNode = this.context.createGain()
		this.analyser.fftSize = FFT_SIZE;
		
		const bufferLength = this.analyser.frequencyBinCount;

		this.processor = this.context.createScriptProcessor(FFT_SIZE, 1, 1);
		this.dataArray = new Uint8Array(bufferLength);

		this.processor.onaudioprocess = () => {

			this.analyser.getByteFrequencyData(this.dataArray) // For Bits
			// analyser.getByteTimeDomainData(this.state.framerFrequencyData) // For Waves
			if (this.cb) this.cb(this.dataArray);
		}

	}

	loadTrack = () => {
		if (this.bufferPromise) return this.bufferPromise;
		return fetch(this.url).then(response => {
			if (!response.ok) {
				throw Error(`${response.status} ${response.statusText}`);
			}

			if (!response.body) {
				throw Error("ReadableStream not yet supported in this browser.");
			}

			const contentLength = response.headers.get("content-length");
			if (!contentLength) {
				throw Error("Content-Length response header unavailable");
			}
			console.log("fetch bufer");
			this.buffer = response.arrayBuffer();
			return this.buffer;
		});
	};

	decodeAudioData = () => {
		return new Promise((resolve, reject) => {
			this.loadTrack().then(arrayBuffer => {
				console.log("start decode data");
				this.context.decodeAudioData(
					arrayBuffer,
					buffer => {
						const source = this.context.createBufferSource();
						source.buffer = buffer;
						source.loop = true;
						source.connect(this.analyser);
						this.analyser.connect(this.gainNode);
						this.gainNode.connect(this.context.destination);
						this.processor.connect(this.context.destination);
						source.start(0);
						resolve(source);
					},
					reject
				);
			});
		});
	};

	play = () => {
		this.context.dispatchEvent(new Event("loading"));
		if (!this.sourcePromise) {
			this.sourcePromise = this.decodeAudioData();
		}
		this.sourcePromise.then(() => {
			this.context.dispatchEvent(new Event("play"));
		})
		this.context.resume();
		return Promise.resolve();
	};

	pause = () => {
		this.context.dispatchEvent(new Event("pause"));
		this.context.suspend();
	};

	subscribe(cb) {
		this.cb = cb;
	}
}

export class Player {
	tracks = [new Track(hardtekLife)];
	isPlaying = false;

	get currentTrack () {
		return this.tracks[0];
	}

	get context () {
		return this.currentTrack.context;
	}

	play() {
		const currentTrack = this.tracks[0];

		if (this.isPlaying) {
			currentTrack.pause();
			this.isPlaying = false;
		} else {
			this.isPlaying = true;
			currentTrack.play();
		}
	}
	subscribe(cb) {
		this.currentTrack.subscribe(cb);
	}
}
