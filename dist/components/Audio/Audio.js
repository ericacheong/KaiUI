"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./Audio.scss");
class AudioComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.startPlayback = () => {
            this.setState({ isPlaying: true });
            this.audioElem.play();
        };
        this.pausePlayback = () => {
            this.setState({ isPlaying: false });
            this.audioElem.pause();
        };
        this.stopPlayback = () => {
            this.setState({ isPlaying: false });
            this.audioElem = new Audio(this.props.url);
        };
        this.state = {
            isPlaying: false
        };
        this.audioElem = new Audio(this.props.url);
        this.audioElem.onended = this.stopPlayback;
    }
    render() {
        return (react_1.default.createElement("div", { className: "audio-softkey-container" }, !this.state.isPlaying ?
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "2x", icon: free_solid_svg_icons_1.faVolumeUp, onClick: this.startPlayback }) :
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "2x", icon: free_solid_svg_icons_1.faSpinner, spin: true, onClick: this.pausePlayback })));
    }
}
exports.default = AudioComponent;
