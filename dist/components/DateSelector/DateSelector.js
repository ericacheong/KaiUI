"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDateSelctor = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./DateSelector.scss");
const SoftKey_1 = __importDefault(require("../SoftKey/SoftKey"));
const TriColumnListView_1 = __importDefault(require("../../views/TriColumnListView/TriColumnListView"));
const BodyTextListItem_1 = __importDefault(require("../BodyTextListItem/BodyTextListItem"));
const dates_1 = require("../../utils/dates");
const Months = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    June: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
};
Object.freeze(Months);
class DateSelector extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.input = null;
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
                        onOK(this.calcSelectedDate());
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
            years: [],
            days: [],
            months: [],
            selectedMonth: -1,
            selectedDay: -1,
            selectedYear: -1
        };
    }
    componentDidMount() {
        const minYear = this.props.minDate.getFullYear();
        const maxYear = this.props.maxDate.getFullYear();
        const years = [];
        for (let i = minYear; i <= maxYear; i++) {
            years.push(i);
        }
        const minDay = 1;
        const maxDay = dates_1.getDaysInMonth(this.props.initialDate.getMonth(), this.props.initialDate.getFullYear());
        const days = [];
        for (let i = minDay; i <= maxDay; i++) {
            days.push(i);
        }
        const months = Object.keys(Months);
        this.setState({
            years,
            months,
            days,
            selectedDay: this.props.initialDate.getDate(),
            selectedMonth: this.props.initialDate.getMonth(),
            selectedYear: this.props.initialDate.getFullYear(),
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
            react_1.default.createElement("div", { className: "kai-datesel-wrapper", tabIndex: -1, onKeyDown: this.onKeyDown },
                header ? react_1.default.createElement("div", { className: "kai-datesel-header h1" }, header) : null,
                react_1.default.createElement("div", { className: `kai-datesel-container` },
                    react_1.default.createElement("div", { className: "kai-datesel-content" },
                        react_1.default.createElement(TriColumnListView_1.default, { col1Children: this.state.years.map((item) => (react_1.default.createElement(BodyTextListItem_1.default, { header: item.toString() }))), col2Children: this.state.months.map((item) => (react_1.default.createElement(BodyTextListItem_1.default, { header: item.toString() }))), col3Children: this.state.days.map((item) => (react_1.default.createElement(BodyTextListItem_1.default, { header: item.toString() }))), onCol1ChangeIndex: (index) => this.setYear(index), onCol2ChangeIndex: (index) => this.setMonth(index), onCol3ChangeIndex: (index) => this.setDay(index), selectedCol1Index: this.state.years.indexOf(this.props.initialDate.getFullYear()), selectedCol2Index: this.props.initialDate.getMonth(), selectedCol3Index: this.state.days.indexOf(this.props.initialDate.getDate()) })))),
            react_1.default.createElement(SoftKey_1.default, { leftText: "Cancel", leftCallback: () => { this.closeWindow(); }, rightText: "Select", rightCallback: () => { onOK(this.calcSelectedDate()); this.closeWindow(); } })));
    }
    calcSelectedDate() {
        return new Date(this.state.selectedYear, this.state.selectedMonth, this.state.selectedDay);
    }
    setYear(index) {
        this.setState({
            selectedYear: this.state.years[index]
        });
        this.resetDaysForNewMonthYear();
    }
    setMonth(index) {
        this.setState({
            selectedMonth: index + 1
        });
        this.resetDaysForNewMonthYear();
    }
    setDay(index) {
        this.setState({
            selectedDay: this.state.days[index]
        });
    }
    resetDaysForNewMonthYear() {
        const minDay = 1;
        const maxDay = dates_1.getDaysInMonth(this.state.selectedMonth, this.state.selectedYear);
        const days = [];
        for (let i = minDay; i <= maxDay; i++) {
            days.push(i);
        }
        this.setState({ days });
    }
}
function showDateSelctor(config) {
    const div = document.createElement('div');
    div.className = 'kai-datesel';
    document.body.appendChild(div);
    function render(props) {
        react_dom_1.default.render(react_1.default.createElement(DateSelector, Object.assign({}, props)), div);
    }
    function closeWindow() {
        react_dom_1.default.unmountComponentAtNode(div);
        document.body.removeChild(div);
    }
    render(Object.assign(Object.assign({}, config), { close: closeWindow }));
}
exports.showDateSelctor = showDateSelctor;
exports.default = DateSelector;
