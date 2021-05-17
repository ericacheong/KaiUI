"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Header_1 = __importDefault(require("./components/Header/Header"));
const SoftKeyProvider_1 = require("./components/SoftKey/SoftKeyProvider");
const TabView_1 = __importDefault(require("./views/TabView/TabView"));
const ListView_1 = __importDefault(require("./views/ListView/ListView"));
const CheckboxListItem_1 = __importDefault(require("./components/CheckboxListItem/CheckboxListItem"));
const IconListItem_1 = __importDefault(require("./components/IconListItem/IconListItem"));
const TextListItem_1 = __importDefault(require("./components/TextListItem/TextListItem"));
const BodyTextListItem_1 = __importDefault(require("./components/BodyTextListItem/BodyTextListItem"));
const ArrowListItem_1 = __importDefault(require("./components/ArrowListItem/ArrowListItem"));
const RadioButtonListItem_1 = __importDefault(require("./components/RadioButtonListItem/RadioButtonListItem"));
const Separator_1 = __importDefault(require("./components/Separator/Separator"));
const ProgressBar_1 = __importDefault(require("./components/ProgressBar/ProgressBar"));
const Slider_1 = __importDefault(require("./components/Slider/Slider"));
const Button_1 = __importDefault(require("./components/Button/Button"));
const TextInput_1 = __importDefault(require("./components/TextInput/TextInput"));
const toastContext_1 = __importStar(require("./contexts/toastContext"));
require("./App.scss");
const colors_scss_1 = __importDefault(require("./theme/colors.scss"));
const example_png_1 = __importDefault(require("./assets/example.png"));
function App() {
    const handleInputChange = newVal => {
        console.log('new input value', newVal);
    };
    const App = () => {
        const [inputValue, setInputValue] = react_1.useState('');
        const { showToast } = react_1.useContext(toastContext_1.default);
        const toastValues = ['Mmmm... Toasty!', '*pop* toast\'s done!', 'Hey, I\'m a toast!'];
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(Header_1.default, { text: "KaiUI", backgroundColor: colors_scss_1.default.headerPurple }),
            react_1.default.createElement(SoftKeyProvider_1.SoftKeyProvider, null,
                react_1.default.createElement("div", { className: "content" },
                    react_1.default.createElement(TabView_1.default, { tabLabels: [
                            'CB Tab',
                            'Icon Tab',
                            'Txt Tab',
                            'Form Tab',
                            'Misc Tab'
                        ] },
                        react_1.default.createElement(ListView_1.default, null,
                            react_1.default.createElement(CheckboxListItem_1.default, { primary: "Hello primary text", secondary: "seconday text", initCheckboxVal: false, onInputChange: () => { }, checkboxSide: "left" }),
                            react_1.default.createElement(Separator_1.default, { separatorText: 'hello, separator here' }),
                            react_1.default.createElement(CheckboxListItem_1.default, { primary: "Another item with more text", secondary: "secondary text at the bottom", initCheckboxVal: true, onInputChange: () => { }, checkboxSide: "right", focusColor: colors_scss_1.default.carrotOrange }),
                            react_1.default.createElement(RadioButtonListItem_1.default, { primary: "Radio button", secondary: "Secondary text", initButtonVal: false, onInputChange: handleInputChange, buttonSide: "right" }),
                            react_1.default.createElement(RadioButtonListItem_1.default, { primary: "Another radio button", initButtonVal: true, onInputChange: handleInputChange, buttonSide: "right" })),
                        react_1.default.createElement(ListView_1.default, null,
                            react_1.default.createElement(IconListItem_1.default, { primary: "List Item", secondary: "... with asset icon", iconSrc: example_png_1.default }),
                            react_1.default.createElement(IconListItem_1.default, { primary: "List Item", secondary: "... with font icon", icon: "kai-icon-favorite-off" }),
                            react_1.default.createElement(Slider_1.default, { header: "I am a slider", initialValue: 3, minValue: 0, maxValue: 10 }),
                            react_1.default.createElement(Button_1.default, { text: "A button", icon: "kai-icon-camera", iconSide: "left", onClick: () => { } }),
                            react_1.default.createElement(Button_1.default, { text: "A button", iconSrc: example_png_1.default, iconSide: "right", onClick: () => { } }),
                            react_1.default.createElement(Button_1.default, { text: "Button with icon softkey", softKeyIcon: "kai-icon-favorite-off", onClick: () => { } }),
                            react_1.default.createElement(Separator_1.default, { separatorText: 'Another separator' }),
                            react_1.default.createElement(IconListItem_1.default, { primary: "Item without secondary", icon: "kai-icon-wifi" }),
                            react_1.default.createElement(IconListItem_1.default, { primary: "Last item", icon: "kai-icon-camera" })),
                        react_1.default.createElement(ListView_1.default, null,
                            react_1.default.createElement(ProgressBar_1.default, { header: 'Downloading...', percentage: 80, type: 'download', focusColor: colors_scss_1.default.lime }),
                            react_1.default.createElement(ProgressBar_1.default, { header: 'Downloading...', percentage: 30, type: 'download' }),
                            react_1.default.createElement(TextListItem_1.default, { primary: "Hello primary text", secondary: "secondary text", tertiary: "tertiary text" }),
                            react_1.default.createElement(ProgressBar_1.default, { header: 'Buffering...', percentage: 30, type: 'buffer' }),
                            react_1.default.createElement(ProgressBar_1.default, { header: 'Buffering...', percentage: 70, type: 'buffer' }),
                            react_1.default.createElement(TextListItem_1.default, { primary: "Hello primary text", secondary: "No tertiary here" }),
                            react_1.default.createElement(TextListItem_1.default, { primary: "Just primary" })),
                        react_1.default.createElement(ListView_1.default, null,
                            react_1.default.createElement(TextInput_1.default, { label: "I am a text input", onChange: e => setInputValue(e.target.value) }),
                            react_1.default.createElement(TextListItem_1.default, { primary: `Input value: ${inputValue}` }),
                            react_1.default.createElement(TextInput_1.default, { label: "I am a text input that lets you change tabs", enableTabSwitching: true }),
                            react_1.default.createElement(TextInput_1.default, { label: "I am a text input with a custom input prop", placeholder: "Placeholder text" }),
                            react_1.default.createElement(TextInput_1.default, { label: "I am a text input with an initial value", initialValue: "Initial text" })),
                        react_1.default.createElement(ListView_1.default, null,
                            react_1.default.createElement(BodyTextListItem_1.default, { header: "Header text", body: "body text, can support a whole lot of text" }),
                            react_1.default.createElement(BodyTextListItem_1.default, { header: "Header text, but no body" }),
                            react_1.default.createElement(ArrowListItem_1.default, { primary: "Primary text", secondary: "Secondary text" }),
                            react_1.default.createElement(ArrowListItem_1.default, { primary: "Just me and arrow" }),
                            react_1.default.createElement(Button_1.default, { text: "Show a toast", onClick: () => { showToast(toastValues[Math.round(Math.random() * 2)], 5000); } })))))));
    };
    return (react_1.default.createElement(toastContext_1.ToastContextProvider, null,
        react_1.default.createElement(App, null)));
}
exports.default = App;
