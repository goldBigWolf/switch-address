export default `
.switch-address {
  position: fixed;
  top: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 100000;
}

.switch-address_icon {
  font-size: 20px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}

.switch-address_icon:hover {
  color: #2d8cf0;
}

.switch-address_dropdown {
  display: none;
  position: absolute;
  left: 10px;
  top: 25px;
  overflow: auto;
  margin: 5px 0;
  padding: 5px 0;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  position: absolute;
  min-width: 100px;
  z-index: 900;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transform-origin: center top 0px;
  transform-origin: center top 0px;
  -webkit-transition: opacity .2s ease-out;
  transition: opacity .2s ease-out;
  opacity: 0;
}

.switch-address_dropdown-show {
  opacity: 1;
}

.switch-address_dropdown-hide {
  opacity: 0;
}

.switch-address_dropdown_item {
  margin: 0;
  line-height: normal;
  padding: 7px 16px;
  clear: both;
  color: #515a6e;
  font-size: 12px !important;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  -webkit-transition: background .2s ease-in-out;
  transition: background .2s ease-in-out;
}

.switch-address_dropdown_item:hover {
  background: #f3f3f3;
}

.switch-address_dropdown-selected {
  color: #2d8cf0;
  background: #f0faff
}
`
