(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1bOG":function(module,exports){eval('module.exports = ".your .card {\\n  bottom: 0;\\n  position: absolute;\\n}\\n\\n.your .ten {\\n  left: 0;\\n}\\n\\n.your .jack {\\n  left: 20px;\\n}\\n\\n.your .queen {\\n  left: 40px;\\n}\\n\\n.your .king {\\n  left: 60px;\\n}\\n\\n.your .ace {\\n  left: 80px;\\n}\\n\\nbody {\\n  background-color: green;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.table {\\n  width: 500px;\\n  height: 200px;\\n  border: 2px solid black;\\n  position: relative;\\n  background-size: 50px 50px;\\n  background-image:\\n    linear-gradient(to right, grey 1px, transparent 1px),\\n    linear-gradient(to bottom, grey 1px, transparent 1px);\\n}\\n\\n.card {\\n  width: 73px;\\n  height: 97px;\\n  background-image: url(\\"/images/sprites/cards.png\\");\\n}\\n\\n.nine {\\n  background-position: calc(100% * 8 / 12) calc(100% * 2 / 3);\\n}\\n\\n.ten {\\n  background-position: calc(100% * 9 / 12) calc(100% * 2 / 3);\\n}\\n\\n.jack {\\n  background-position: calc(100% * 10 / 12) calc(100% * 2 / 3);\\n}\\n\\n.queen {\\n  background-position: calc(100% * 11 / 12) calc(100% * 2 / 3);\\n}\\n\\n.king {\\n  background-position: 100% calc(100% * 2 / 3);\\n}\\n\\n.ace {\\n  background-position: 0 calc(100% * 2 / 3);\\n}\\n\\n.opponent {\\n  display: flex;\\n}\\n\\n.opponent.deck {\\n  z-index: 10;\\n  position: relative;\\n}\\n\\n.opponent .card {\\n  margin-right: 27px;\\n  flex-shrink: 0;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvNi01LXVuaXQtY29udGV4dC9zdHlsZS5jc3M/MzM5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0IsY0FBYyx1QkFBdUIsR0FBRyxnQkFBZ0IsWUFBWSxHQUFHLGlCQUFpQixlQUFlLEdBQUcsa0JBQWtCLGVBQWUsR0FBRyxpQkFBaUIsZUFBZSxHQUFHLGdCQUFnQixlQUFlLEdBQUcsVUFBVSw0QkFBNEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxZQUFZLGlCQUFpQixrQkFBa0IsNEJBQTRCLHVCQUF1QiwrQkFBK0IsNElBQTRJLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLHlEQUF5RCxHQUFHLFdBQVcsZ0VBQWdFLEdBQUcsVUFBVSxnRUFBZ0UsR0FBRyxXQUFXLGlFQUFpRSxHQUFHLFlBQVksaUVBQWlFLEdBQUcsV0FBVyxpREFBaUQsR0FBRyxVQUFVLDhDQUE4QyxHQUFHLGVBQWUsa0JBQWtCLEdBQUcsb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxxQkFBcUIsdUJBQXVCLG1CQUFtQixHQUFHIiwiZmlsZSI6IjFiT0cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLnlvdXIgLmNhcmQge1xcbiAgYm90dG9tOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ueW91ciAudGVuIHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi55b3VyIC5qYWNrIHtcXG4gIGxlZnQ6IDIwcHg7XFxufVxcblxcbi55b3VyIC5xdWVlbiB7XFxuICBsZWZ0OiA0MHB4O1xcbn1cXG5cXG4ueW91ciAua2luZyB7XFxuICBsZWZ0OiA2MHB4O1xcbn1cXG5cXG4ueW91ciAuYWNlIHtcXG4gIGxlZnQ6IDgwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFibGUge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdyZXkgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBncmV5IDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IDczcHg7XFxuICBoZWlnaHQ6IDk3cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWFnZXMvc3ByaXRlcy9jYXJkcy5wbmdcXFwiKTtcXG59XFxuXFxuLm5pbmUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlICogOCAvIDEyKSBjYWxjKDEwMCUgKiAyIC8gMyk7XFxufVxcblxcbi50ZW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlICogOSAvIDEyKSBjYWxjKDEwMCUgKiAyIC8gMyk7XFxufVxcblxcbi5qYWNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAqIDEwIC8gMTIpIGNhbGMoMTAwJSAqIDIgLyAzKTtcXG59XFxuXFxuLnF1ZWVuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAqIDExIC8gMTIpIGNhbGMoMTAwJSAqIDIgLyAzKTtcXG59XFxuXFxuLmtpbmcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSBjYWxjKDEwMCUgKiAyIC8gMyk7XFxufVxcblxcbi5hY2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgKiAyIC8gMyk7XFxufVxcblxcbi5vcHBvbmVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ub3Bwb25lbnQuZGVjayB7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9wcG9uZW50IC5jYXJkIHtcXG4gIG1hcmdpbi1yaWdodDogMjdweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1bOG\n')},"9d8Q":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzY1MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiOWQ4US5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9d8Q\n")},Hsqq:function(module,exports){eval('module.exports = ".darts-background {\\n  background-image: url(\\"/images/units/6-2/darts.png\\");\\n  background-size: cover;\\n  width: 400px;\\n  height: 400px;\\n}\\n\\n.dart {\\n  background-image: url(\\"/images/units/6-2/dart.png\\");\\n  width: 100px;\\n  height: 77px;\\n}\\n\\n.bullseye {\\n  width: 14px;\\n  height: 14px;\\n  border-radius: 14px;\\n  background-color: red;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvNi0yLXVuaXQtYWJzb2x1dGUvc3R5bGUuY3NzPzU3Y2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDLDJEQUEyRCwyQkFBMkIsaUJBQWlCLGtCQUFrQixHQUFHLFdBQVcsMERBQTBELGlCQUFpQixpQkFBaUIsR0FBRyxlQUFlLGdCQUFnQixpQkFBaUIsd0JBQXdCLDBCQUEwQixHQUFHIiwiZmlsZSI6IkhzcXEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLmRhcnRzLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1hZ2VzL3VuaXRzLzYtMi9kYXJ0cy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uZGFydCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWFnZXMvdW5pdHMvNi0yL2RhcnQucG5nXFxcIik7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDc3cHg7XFxufVxcblxcbi5idWxsc2V5ZSB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///Hsqq\n')},RA2h:function(module,exports){eval('module.exports = ".container {\\n  border: 5px solid #E44D26;\\n  position: relative;\\n  top: 20px;\\n  left: 20px;\\n  width: calc(100% - 40px);\\n  height: calc(100% - 40px);\\n  /* css хак для создания сетки 50x50 пикселей\\n  https://stackoverflow.com/questions/3540194/how-to-make-a-grid-like-graph-paper-grid-with-just-css */\\n  background-size: 50px 50px;\\n  background-image:\\n    linear-gradient(to right, grey 1px, transparent 1px),\\n    linear-gradient(to bottom, grey 1px, transparent 1px);\\n}\\n\\n.absolute {\\n  position: absolute;\\n  top: 100px;\\n  left: 200px;\\n}\\n\\n.box {\\n  width: 150px;\\n  height: 150px;\\n  border: 5px dashed #C57BDD;\\n  text-align: center;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvYWJzb2x1dGUtcmVsYXRpdmUvc3R5bGUuY3NzP2JlYTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCLDhCQUE4Qix1QkFBdUIsY0FBYyxlQUFlLDZCQUE2Qiw4QkFBOEIsd0xBQXdMLDRJQUE0SSxHQUFHLGVBQWUsdUJBQXVCLGVBQWUsZ0JBQWdCLEdBQUcsVUFBVSxpQkFBaUIsa0JBQWtCLCtCQUErQix1QkFBdUIsR0FBRyIsImZpbGUiOiJSQTJoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250YWluZXIge1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0U0NEQyNjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMjBweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgLyogY3NzINGF0LDQuiDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRgdC10YLQutC4IDUweDUwINC/0LjQutGB0LXQu9C10LlcXG4gIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NDAxOTQvaG93LXRvLW1ha2UtYS1ncmlkLWxpa2UtZ3JhcGgtcGFwZXItZ3JpZC13aXRoLWp1c3QtY3NzICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JleSAxcHgsIHRyYW5zcGFyZW50IDFweCksXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGdyZXkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xcbn1cXG5cXG4uYWJzb2x1dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDIwMHB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXI6IDVweCBkYXNoZWQgI0M1N0JERDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///RA2h\n')},ZyId:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9iYXNlLmNzcz8zMGZkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ilp5SWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ZyId\n")},gXvE:function(module,exports){eval('module.exports = ".relative {\\n  position: relative;\\n  top: 50px;\\n  left: 50px;\\n}\\n\\n.box {\\n  width: 150px;\\n  height: 150px;\\n  border: 5px dashed #000000;\\n  text-align: center;\\n}\\n\\n.box:nth-child(1) {\\n  background-color: #d55353;\\n}\\n\\n.box:nth-child(2) {\\n  background-color: #5858ef;\\n}\\n\\n.box:nth-child(3) {\\n  background-color: #80e880;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvcmVsYXRpdmUvc3R5bGUuY3NzPzUxYWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCLHVCQUF1QixjQUFjLGVBQWUsR0FBRyxVQUFVLGlCQUFpQixrQkFBa0IsK0JBQStCLHVCQUF1QixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHIiwiZmlsZSI6ImdYdkUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTBweDtcXG4gIGxlZnQ6IDUwcHg7XFxufVxcblxcbi5ib3gge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlcjogNXB4IGRhc2hlZCAjMDAwMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCgxKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU1MzUzO1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1OGVmO1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCgzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBlODgwO1xcbn1cIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///gXvE\n')},irGq:function(module,exports){eval('module.exports = ".absolute {\\n  position: absolute;\\n}\\n\\n.box {\\n  padding-top: 20px;\\n  width: 70%;\\n  height: 70%;\\n  border-radius: 55%;\\n  border: 5px dashed #000000;\\n  text-align: center;\\n  opacity: 0.85;\\n}\\n\\n.box:nth-child(1) {\\n  background-color: #d55353;\\n  right: 0;\\n}\\n\\n.box:nth-child(2) {\\n  background-color: #E44D26;\\n  top: 0;\\n}\\n\\n.box:nth-child(3) {\\n  bottom: 0;\\n  left: 0;\\n  background-color: #F7DF1E;\\n}\\n\\n.box:nth-child(4) {\\n  background-color: #80e880;\\n  bottom: 0;\\n  right: 0;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvc3RhY2tpbmctb3JkZXIvc3R5bGUuY3NzPzI3ZTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCLHVCQUF1QixHQUFHLFVBQVUsc0JBQXNCLGVBQWUsZ0JBQWdCLHVCQUF1QiwrQkFBK0IsdUJBQXVCLGtCQUFrQixHQUFHLHVCQUF1Qiw4QkFBOEIsYUFBYSxHQUFHLHVCQUF1Qiw4QkFBOEIsV0FBVyxHQUFHLHVCQUF1QixjQUFjLFlBQVksOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixjQUFjLGFBQWEsR0FBRyIsImZpbGUiOiJpckdxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5ib3gge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBib3JkZXItcmFkaXVzOiA1NSU7XFxuICBib3JkZXI6IDVweCBkYXNoZWQgIzAwMDAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5ib3g6bnRoLWNoaWxkKDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTUzNTM7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0NEQyNjtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMykge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0RGMUU7XFxufVxcblxcbi5ib3g6bnRoLWNoaWxkKDQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGU4ODA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///irGq\n')},kNYl:function(module,exports){eval('module.exports = ".clippy {\\n  position: fixed;\\n  bottom: 20px;\\n  right: 20px;\\n  width: 150px;\\n  height: 150px;\\n  background-image: url(\\"/gifs/clippy.gif\\");\\n  background-size: cover;\\n}\\n\\np {\\n  text-indent: 2em;\\n  padding: 0 20px;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvZml4ZWQvc3R5bGUuY3NzP2ExMmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixrQkFBa0IsZ0RBQWdELDJCQUEyQixHQUFHLE9BQU8scUJBQXFCLG9CQUFvQixHQUFHIiwiZmlsZSI6ImtOWWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLmNsaXBweSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9naWZzL2NsaXBweS5naWZcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbnAge1xcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///kNYl\n')},mwnu:function(module,exports){eval('module.exports = ".absolute {\\n  position: absolute;\\n}\\n\\n.box {\\n  padding-top: 20px;\\n  width: 70%;\\n  height: 70%;\\n  border-radius: 55%;\\n  border: 5px dashed #000000;\\n  text-align: center;\\n  opacity: 0.85;\\n}\\n\\n.box:nth-child(1) {\\n  z-index: 1;\\n  background-color:#E44D26;\\n}\\n\\n.box:nth-child(2) {\\n  background-color: #d55353;\\n  z-index: -1;\\n  top: 0;\\n  right: 0;\\n}\\n\\n.box:nth-child(3) {\\n  z-index: 1;\\n  bottom: 0;\\n  right: 0;\\n  background-color: #80e880;\\n}\\n\\n.box:nth-child(4) {\\n  z-index: 0;\\n  background-color: #F7DF1E;\\n  bottom: 0;\\n  left: 0;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvc3RhY2tpbmctY3VzdG9tL3N0eWxlLmNzcz8xYjQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2Qix1QkFBdUIsR0FBRyxVQUFVLHNCQUFzQixlQUFlLGdCQUFnQix1QkFBdUIsK0JBQStCLHVCQUF1QixrQkFBa0IsR0FBRyx1QkFBdUIsZUFBZSw2QkFBNkIsR0FBRyx1QkFBdUIsOEJBQThCLGdCQUFnQixXQUFXLGFBQWEsR0FBRyx1QkFBdUIsZUFBZSxjQUFjLGFBQWEsOEJBQThCLEdBQUcsdUJBQXVCLGVBQWUsOEJBQThCLGNBQWMsWUFBWSxHQUFHIiwiZmlsZSI6Im13bnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmJveCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDU1JTtcXG4gIGJvcmRlcjogNXB4IGRhc2hlZCAjMDAwMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMSkge1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6I0U0NEQyNjtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NTM1MztcXG4gIHotaW5kZXg6IC0xO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5ib3g6bnRoLWNoaWxkKDMpIHtcXG4gIHotaW5kZXg6IDE7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGU4ODA7XFxufVxcblxcbi5ib3g6bnRoLWNoaWxkKDQpIHtcXG4gIHotaW5kZXg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdERjFFO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mwnu\n')},pkMx:function(module,exports){eval('module.exports = ".absolute {\\n  position: absolute;\\n  top: 200px;\\n  left: 200px;\\n}\\n\\n.box {\\n  width: 150px;\\n  height: 150px;\\n  border: 5px dashed #000000;\\n  text-align: center;\\n}\\n\\n.box:nth-child(1) {\\n  background-color: #d55353;\\n}\\n\\n.box:nth-child(2) {\\n  background-color: #5858ef;\\n}\\n\\n.box:nth-child(3) {\\n  background-color: #80e880;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvYWJzb2x1dGUvc3R5bGUuY3NzPzFlYzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCLHVCQUF1QixlQUFlLGdCQUFnQixHQUFHLFVBQVUsaUJBQWlCLGtCQUFrQiwrQkFBK0IsdUJBQXVCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUciLCJmaWxlIjoicGtNeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIuYWJzb2x1dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMDBweDtcXG4gIGxlZnQ6IDIwMHB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXI6IDVweCBkYXNoZWQgIzAwMDAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NTM1MztcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NThlZjtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwZTg4MDtcXG59XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pkMx\n')},q9S5:function(module,exports){eval('module.exports = ".absolute {\\n  position: absolute;\\n}\\n\\n.box {\\n  width: 150px;\\n  height: 150px;\\n  border: 5px dashed #000000;\\n  text-align: center;\\n}\\n\\n.box:nth-child(1) {\\n  background-color: #d55353;\\n}\\n\\n.box:nth-child(2) {\\n  top: 50px;\\n  left: 50px;\\n  background-color: #E44D26;\\n}\\n\\n.box:nth-child(3) {\\n  top: 100px;\\n  left: 100px;\\n  background-color: #F7DF1E;\\n}\\n\\n.box:nth-child(4) {\\n  background-color: #80e880;\\n  top: 150px;\\n  left: 150px;\\n}\\n\\n.box:nth-child(5) {\\n  top: 200px;\\n  left: 200px;\\n  background-color: #53C1DF;\\n}\\n\\n.box:nth-child(6) {\\n  background-color: #5858ef;\\n  top: 250px;\\n  left: 250px;\\n}\\n\\n.box:nth-child(7) {\\n  background-color: #C57BDD;\\n  top: 250px;\\n  left: 250px;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvc3RhY2tpbmctY29udGV4dC9zdHlsZS5jc3M/NDkwZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkIsdUJBQXVCLEdBQUcsVUFBVSxpQkFBaUIsa0JBQWtCLCtCQUErQix1QkFBdUIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsdUJBQXVCLGNBQWMsZUFBZSw4QkFBOEIsR0FBRyx1QkFBdUIsZUFBZSxnQkFBZ0IsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixlQUFlLGdCQUFnQixHQUFHLHVCQUF1QixlQUFlLGdCQUFnQiw4QkFBOEIsR0FBRyx1QkFBdUIsOEJBQThCLGVBQWUsZ0JBQWdCLEdBQUcsdUJBQXVCLDhCQUE4QixlQUFlLGdCQUFnQixHQUFHIiwiZmlsZSI6InE5UzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmJveCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyOiA1cHggZGFzaGVkICMwMDAwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib3g6bnRoLWNoaWxkKDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTUzNTM7XFxufVxcblxcbi5ib3g6bnRoLWNoaWxkKDIpIHtcXG4gIHRvcDogNTBweDtcXG4gIGxlZnQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ0RDI2O1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCgzKSB7XFxuICB0b3A6IDEwMHB4O1xcbiAgbGVmdDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdERjFFO1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCg0KSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBlODgwO1xcbiAgdG9wOiAxNTBweDtcXG4gIGxlZnQ6IDE1MHB4O1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCg1KSB7XFxuICB0b3A6IDIwMHB4O1xcbiAgbGVmdDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNDMURGO1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCg2KSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1OGVmO1xcbiAgdG9wOiAyNTBweDtcXG4gIGxlZnQ6IDI1MHB4O1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCg3KSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzU3QkREO1xcbiAgdG9wOiAyNTBweDtcXG4gIGxlZnQ6IDI1MHB4O1xcbn1cIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///q9S5\n')},"sc+r":function(module,exports){eval('module.exports = ".sticky {\\n  position: sticky;\\n  top: 50px;\\n  left: 50px;\\n}\\n\\n.box {\\n  width: 150px;\\n  height: 150px;\\n  border: 5px dashed #000000;\\n  text-align: center;\\n}\\n\\n.box:nth-child(1) {\\n  background-color: #d55353;\\n}\\n\\n.box:nth-child(2) {\\n  background-color: #5858ef;\\n}\\n\\n.box:nth-child(3) {\\n  background-color: #80e880;\\n}\\n\\n.container {\\n  /* для скролла */\\n  height: 2000px;\\n  border: 5px solid #E44D26;\\n}\\n\\nbody {\\n  height: 3000px;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvc3RpY2t5L3N0eWxlLmNzcz84MjZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQixxQkFBcUIsY0FBYyxlQUFlLEdBQUcsVUFBVSxpQkFBaUIsa0JBQWtCLCtCQUErQix1QkFBdUIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyxnQkFBZ0Isd0NBQXdDLDhCQUE4QixHQUFHLFVBQVUsbUJBQW1CLEdBQUciLCJmaWxlIjoic2Mrci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIuc3RpY2t5IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDUwcHg7XFxuICBsZWZ0OiA1MHB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXI6IDVweCBkYXNoZWQgIzAwMDAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NTM1MztcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NThlZjtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoMykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwZTg4MDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAvKiDQtNC70Y8g0YHQutGA0L7Qu9C70LAgKi9cXG4gIGhlaWdodDogMjAwMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0U0NEQyNjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDMwMDBweDtcXG59XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///sc+r\n')},wA8d:function(module,exports){eval('module.exports = ".modal-background {\\n  background-color: rgba(0, 0, 0, .8);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.modal-window {\\n  background-color: silver;\\n  font-family: \\"Segoe UI\\", sans-serif;\\n  border: 1px solid;\\n  border-color: rgb(223, 223, 223) rgb(128, 128, 128) rgb(128, 128, 128) rgb(223, 223, 223);\\n  width: 400px;\\n}\\n\\n.modal-background h2 {\\n  border: 1px solid;\\n  border-color: inherit;\\n  background: linear-gradient(to right, navy 0%, powderblue 100%);\\n  font-size: 12px;\\n  color: white;\\n  margin: 0;\\n  padding: 2px;\\n}\\n\\n.modal-background p {\\n  margin: 10px 20px;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvNi0zLXVuaXQtZml4ZWQvc3R5bGUuY3NzPzI4MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDLHdDQUF3QyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG1CQUFtQiw2QkFBNkIsMENBQTBDLHNCQUFzQiw4RkFBOEYsaUJBQWlCLEdBQUcsMEJBQTBCLHNCQUFzQiwwQkFBMEIsb0VBQW9FLG9CQUFvQixpQkFBaUIsY0FBYyxpQkFBaUIsR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUciLCJmaWxlIjoid0E4ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIubW9kYWwtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC13aW5kb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpIHJnYigxMjgsIDEyOCwgMTI4KSByZ2IoMTI4LCAxMjgsIDEyOCkgcmdiKDIyMywgMjIzLCAyMjMpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubW9kYWwtYmFja2dyb3VuZCBoMiB7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbmF2eSAwJSwgcG93ZGVyYmx1ZSAxMDAlKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLm1vZGFsLWJhY2tncm91bmQgcCB7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG59XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///wA8d\n')},yA3k:function(module,exports){eval('module.exports = ".chess-deck {\\n  margin: 20px;\\n  width: 400px;\\n  height: 400px;\\n  outline: 2px solid chocolate;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: flex-start;\\n}\\n\\n.black-square {\\n  background-color: black;\\n  flex-shrink: 0;\\n  width: 12.5%;\\n  height: 12.5%;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGVzc29ucy9odG1sL2h0bWwtMDYvc25pcHBldHMvNi0xLXVuaXQtcmVsYXRpdmUvc3R5bGUuY3NzP2ZkODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQStCLGlCQUFpQixpQkFBaUIsa0JBQWtCLGlDQUFpQyxrQkFBa0Isb0JBQW9CLDRCQUE0QixHQUFHLG1CQUFtQiw0QkFBNEIsbUJBQW1CLGlCQUFpQixrQkFBa0IsR0FBRyIsImZpbGUiOiJ5QTNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5jaGVzcy1kZWNrIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgY2hvY29sYXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uYmxhY2stc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3aWR0aDogMTIuNSU7XFxuICBoZWlnaHQ6IDEyLjUlO1xcbn1cIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///yA3k\n')}}]);