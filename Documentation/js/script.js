const Installation = document.getElementById('Installation')
const HTML = document.getElementById('HTML')
const CSSSection = document.getElementById('CSS')
const Javascript = document.getElementById('JS')
const JavascriptAnimation = document.getElementById('JSanimation')
const Thank = document.getElementById('thank')

function InstallationShow() {
    Thank.style.display = "none"
    JavascriptAnimation.style.display = "none"
    CSSSection.style.display = "none"
    Javascript.style.display = "none"
    HTML.style.display = "none"
    Installation.style.display = "block"
};

function HTMLShow() {
    Thank.style.display = "none"
    JavascriptAnimation.style.display = "none"
    CSSSection.style.display = "none"
    Javascript.style.display = "none"
    HTML.style.display = "block"
    Installation.style.display = "none"
};

function CSSShow() {
    Thank.style.display = "none"
    JavascriptAnimation.style.display = "none"
    CSSSection.style.display = "block"
    Javascript.style.display = "none"
    HTML.style.display = "none"
    Installation.style.display = "none"
};

function JavascriptShow() {
    Thank.style.display = "none"
    JavascriptAnimation.style.display = "none"
    CSSSection.style.display = "none"
    Javascript.style.display = "block"
    HTML.style.display = "none"
    Installation.style.display = "none"
};

function JavascriptAnimationShow() {
    Thank.style.display = "none"
    JavascriptAnimation.style.display = "block"
    CSSSection.style.display = "none"
    Javascript.style.display = "none"
    HTML.style.display = "none"
    Installation.style.display = "none"
};
