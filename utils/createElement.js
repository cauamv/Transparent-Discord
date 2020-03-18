export function createInput({
    type,
    id,
    value = "",
    text = "",
    eventType = "onkeypress",
    eventMethod = null
}) {
    const input = document.createElement("input");
    input.type = type;
    if (type === "range") {
        input.min = 0;
        input.max = 9;
    }
    input.id = id;
    input.value = value;
    input.placeholder = text;
    input[eventType] = eventMethod;

    return input;
}

export function createButton({ id, text = "", eventMethod = null }) {
    const button = document.createElement("button");
    button.id = id;
    button.innerText = text;
    button.onclick = eventMethod;

    return button;
}

export function createStyleSheet({ parent, id = "", isMainStyleSheet, CSS }) {
    const sheet = parent.createElement("style");
    if (isMainStyleSheet) {
        const previousStylesheet = parent.getElementById(id);
        if (previousStylesheet) {
            previousStylesheet.remove();
            window.onkeydown = null;
        }
    }
    sheet.appendChild(parent.createTextNode(CSS));
    sheet.id = id;

    return sheet;
}
