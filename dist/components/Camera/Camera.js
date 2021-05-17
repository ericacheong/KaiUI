"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const react_1 = __importDefault(require("react"));
require("./Camera.scss");
const HorizontalListView_1 = __importDefault(require("../../views/HorizontalListView/HorizontalListView"));
const IconButton_1 = __importDefault(require("../IconButton/IconButton"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
class Camera extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.videoPlayer = null;
        this.canvas = null;
        this.takePhoto = () => {
            const { sendFile } = this.props;
            if (this.canvas) {
                const context = this.canvas.getContext('2d');
                if (context && this.videoPlayer) {
                    context.drawImage(this.videoPlayer, 0, 0, 200, 150);
                    this.canvas.toBlob((blob) => this.setState({ blob }));
                    this.setState({ showImage: true });
                }
            }
        };
        this.state = {
            showImage: false,
            blob: undefined
        };
    }
    processDevices(devices) {
        devices.forEach(device => {
            this.setDevice(device);
        });
    }
    setDevice(device) {
        return __awaiter(this, void 0, void 0, function* () {
            const { deviceId } = device;
            const stream = yield navigator.mediaDevices.getUserMedia({ audio: false, video: { deviceId } });
            if (this.videoPlayer) {
                this.videoPlayer.srcObject = stream;
                this.videoPlayer.play();
            }
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const cameras = yield navigator.mediaDevices.enumerateDevices();
            this.processDevices(cameras);
        });
    }
    render() {
        return (react_1.default.createElement("div", { className: "c-camera-feed" },
            react_1.default.createElement("div", { className: "c-camera-feed__stage " + (this.state.showImage ? "" : "hidden") },
                react_1.default.createElement("canvas", { width: "200", height: "150", ref: ref => (this.canvas = ref) })),
            react_1.default.createElement("div", { className: "c-camera-feed__viewer " + (this.state.showImage ? "hidden" : "") },
                react_1.default.createElement("video", { ref: ref => (this.videoPlayer = ref), width: "240", height: "150" })),
            this.state.showImage ?
                react_1.default.createElement(HorizontalListView_1.default, { isActive: true, preserveIndexes: true, className: "camera-controls" },
                    react_1.default.createElement(IconButton_1.default, { id: "camera-control-accept", index: 0, icon: react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCheck, size: "5x" }), focusClass: this.props.focusClass, onClick: () => this.props.sendFile(this.state.blob) }),
                    react_1.default.createElement(IconButton_1.default, { id: "camera-control-redo", index: 1, icon: react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faRedo, size: "5x" }), focusClass: this.props.focusClass, onClick: () => this.setState({ showImage: false }) }))
                :
                    react_1.default.createElement(HorizontalListView_1.default, { isActive: true, preserveIndexes: true, className: "camera-controls" },
                        react_1.default.createElement(IconButton_1.default, { id: "camera-control-take", index: 0, icon: react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCamera, size: "5x" }), focusClass: this.props.focusClass, onClick: this.takePhoto }))));
    }
}
exports.Camera = Camera;
