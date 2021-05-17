"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTimeSelector = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./TimeSelector.scss");
const SoftKey_1 = __importDefault(require("../SoftKey/SoftKey"));
const TriColumnListView_1 = __importDefault(require("../../views/TriColumnListView/TriColumnListView"));
const BodyTextListItem_1 = __importDefault(require("../BodyTextListItem/BodyTextListItem"));
class TimeSelector extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onKeyDown = e => {
            const { onOK, onCancel } = this.props;
            switch (e.key) {
                case 'SoftLeft':
                    if (onCancel) {
                        onCancel();
                    }
                    this.closeWindow();
                    break;
                case 'Enter':
                    if (onOK) {
                        onOK(this.calcSelectedTime());
                    }
                    this.closeWindow();
                    break;
                case 'Backspace':
                    this.closeWindow();
                    e.preventDefault();
                    break;
                default:
                    break;
            }
        };
        this.state = {
            isLoading: true,
            hours: [],
            minutes: [],
            periods: [],
            selectedHour: -1,
            selectedMinute: -1,
            selectedPeriod: "AM"
        };
    }
    componentDidMount() {
        const hours = [...Array(12).keys()].slice(1);
        const minutes = [...Array(59).keys()];
        this.setState({
            hours,
            minutes,
            periods: ["AM", "PM"],
            selectedHour: this.props.initialTime.hour,
            selectedMinute: this.props.initialTime.minute,
            selectedPeriod: this.props.initialTime.period,
            isLoading: false
        });
    }
    closeWindow() {
        this.props.close();
    }
    render() {
        if (this.state.isLoading) {
            return (react_1.default.createElement("div", null, "Loading..."));
        }
        const { header, onOK } = this.props;
        return (react_1.default.createElement("div", { className: "systemContent" },
            react_1.default.createElement("div", { className: "kai-timesel-wrapper", tabIndex: -1, onKeyDown: this.onKeyDown },
                header ? react_1.default.createElement("div", { className: "kai-timesel-header h1" }, header) : null,
                react_1.default.createElement("div", { className: `kai-timesel-container` },
                    react_1.default.createElement("div", { className: "kai-timesel-content" },
                        react_1.default.createElement(TriColumnListView_1.default, { col1Children: this.state.hours.map((item) => (react_1.default.createElement(BodyTextListItem_1.default, { header: item.toString() }))), col2Children: this.state.minutes.map((item) => (react_1.default.createElement(BodyTextListItem_1.default, { header: item.toString() }))), col3Children: this.state.periods.map((item) => (react_1.default.createElement(BodyTextListItem_1.default, { header: item.toString() }))), onCol1ChangeIndex: (index) => this.setHour(index), onCol2ChangeIndex: (index) => this.setMinute(index), onCol3ChangeIndex: (index) => this.setPeriod(index), selectedCol1Index: this.props.initialTime.hour - 1, selectedCol2Index: this.props.initialTime.minute, selectedCol3Index: this.state.periods.indexOf(this.props.initialTime.period) })))),
            react_1.default.createElement(SoftKey_1.default, { leftText: "Cancel", leftCallback: () => { this.closeWindow(); }, rightText: "Select", rightCallback: () => { onOK(this.calcSelectedTime()); this.closeWindow(); } })));
    }
    calcSelectedTime() {
        return {
            hour: this.state.selectedHour,
            minute: this.state.selectedMinute,
            period: this.state.selectedPeriod
        };
    }
    setHour(index) {
        this.setState({
            selectedHour: index + 1
        });
    }
    setMinute(index) {
        this.setState({
            selectedMinute: index
        });
    }
    setPeriod(index) {
        this.setState({
            selectedPeriod: this.state.periods[index]
        });
    }
}
function showTimeSelector(config) {
    const div = document.createElement('div');
    div.className = 'kai-timesel';
    document.body.appendChild(div);
    function render(props) {
        react_dom_1.default.render(react_1.default.createElement(TimeSelector, Object.assign({}, props)), div);
    }
    function closeWindow() {
        react_dom_1.default.unmountComponentAtNode(div);
        document.body.removeChild(div);
    }
    render(Object.assign(Object.assign({}, config), { close: closeWindow }));
}
exports.showTimeSelector = showTimeSelector;
exports.default = TimeSelector;
