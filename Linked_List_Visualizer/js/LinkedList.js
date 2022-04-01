// Global Variables

let list = document.getElementById('list');
let nodes = document.getElementsByClassName('node');
let pointers = document.getElementsByClassName('pointer');
let error = document.getElementById('error');

// Animations Timeouts

let nodeAnimationTimeout;
let pointerAnimationTimeout;
let deleteTimeout;

function setAnimationsTimeOuts(animations) {
    nodeAnimationTimeout = animations.nodeAnimationTimeout;
    pointerAnimationTimeout = animations.pointerAnimationTimeout;
    deleteTimeout = animations.deleteTimeout;
}

// 'Private' functions

let errorCircle = '<i class="fas fa-exclamation-circle"></i> ';

function handleEmptyListError() {
    if (nodes.length === 0) {
        error.innerHTML = errorCircle + " List is empty";
        error.firstChild.style.animation = "highlightNode .8s ease";
        return true;
    }
    error.innerHTML = null;
    return false;
}

function checkInputErrors(input, type, endsAtLastNode = false) {
    let inputError = false;
    let end = endsAtLastNode ? nodes.length - 1 : nodes.length;

    if (isNaN(input)) {
        error.innerHTML = errorCircle + type + " must be a number";
        inputError = true;
    } else if (type === "Index" && (input > end || input < 0)) {
        error.innerHTML = errorCircle + "Index Out Of Bounds";
        inputError = true;
    }

    if (inputError)
        error.firstChild.style.animation = "highlightNode .8s ease";
    else
        error.innerHTML = null;

    return inputError;
}

function animateNode(i) {
    return new Promise(resolve => {
        nodes[i].style.animation =
            "highlightNode " +
            nodeAnimationTimeout / 1000 + "s " +
            "ease";
        setTimeout(() => {
            nodes[i].style.animation = null;
            resolve();
        }, nodeAnimationTimeout);
    });
}

function animatePointer(i) {
    return new Promise(resolve => {
        pointers[i].style.animation =
            "highlightPointer " +
            pointerAnimationTimeout / 1000 + "s " +
            "ease";
        setTimeout(() => {
            pointers[i].style.animation = null;
            resolve();
        }, pointerAnimationTimeout);
    });
}

function deleteNode(i) {
    return new Promise(resolve => {
        nodes[i].style.animation =
            "deleteNode " + deleteTimeout / 1000 + "s ease";
        pointers[i].style.animation =
            "deletePointer " + deleteTimeout / 1000 + "s ease";
        setTimeout(() => {
            list.removeChild(nodes[i]);
            list.removeChild(pointers[i]);
            resolve();
        }, deleteTimeout);
    });
}

async function animateNodes(from, to) {
    for (let i = from; i <= to; i++) {
        await animateNode(i);
        await animatePointer(i);
    }
}

function animateNodesAfterRemove(from) {
    return new Promise(resolve => {
        for (let i = from; i < nodes.length; i++) {

            nodes[i].style.animation =
                "moveLeftNode " +
                deleteTimeout / 1000 + "s " +
                "ease";

            pointers[i].style.animation =
                "moveLeftNode " +
                deleteTimeout / 1000 + "s " +
                "ease";

            setTimeout(() => {
                nodes[i].style.animation = null;
                pointers[i].style.animation = null;
            }, deleteTimeout)
        }

        setTimeout(() => resolve(), deleteTimeout)
    })
}

function animateNodesBeforeInsert(from, to) {
    return new Promise(resolve => {
        for (let i = from; i < to; i++) {
            console.log('length3', nodes.length)

            nodes[i].style.animation =
                "moveRightNode " +
                pointerAnimationTimeout / 1000 + "s " +
                "ease";

            pointers[i].style.animation =
                "moveRightNode " +
                pointerAnimationTimeout / 1000 + "s " +
                "ease";

            setTimeout(() => {
                nodes[i].style.animation = null;
                pointers[i].style.animation = null;
            }, pointerAnimationTimeout)
        }

        setTimeout(() => resolve(), pointerAnimationTimeout)
    })
}



async function add(i, data) {

    if (checkInputErrors(i, "Index") || checkInputErrors(data, "Data"))
        return;



    let node = document.createElement('div');
    node.classList.add('node');

    let number = document.createElement('p');
    number.classList.add('number');

    let text = document.createTextNode(data);

    number.appendChild(text);
    node.appendChild(number);

    let pointer = document.createElement('div');
    pointer.classList.add('pointer');
    pointer.style.opacity = "0";

    let img = document.createElement('img');
    img.src = "img/pointer.png";

    pointer.appendChild(img);

    if (i === nodes.length) {
        await animateNodes(0, nodes.length - 1);
        list.appendChild(node);
        list.appendChild(pointer);
    } else {
        await animateNodes(0, i - 1);
        await animateNodesBeforeInsert(i, nodes.length)
        list.insertBefore(pointer, nodes[i]);
        list.insertBefore(node, pointer);
    }

    node.style.animation =
        "grow " +
        nodeAnimationTimeout / 1000 + "s " +
        "ease";

    setTimeout(() => {
        pointer.style.opacity = 1;
        pointer.style.animation =
            "slide " +
            pointerAnimationTimeout / 1000 + "s " +
            "ease";
    }, nodeAnimationTimeout);
}

async function set(i, data) {

    if (checkInputErrors(i, "Index", true) || checkInputErrors(data, "Data"))
        return;

    let numberAnimationTimeOut = 1000;

    await animateNodes(0, i - 1);

    nodes[i].firstChild.style.animation =
        "fadeNumberOut " +
        numberAnimationTimeOut / 1000 + "s " +
        "ease";

    setTimeout(() => {
        nodes[i].firstChild.innerHTML = data;
        nodes[i].firstChild.style.animation =
            "fadeNumberIn " +
            numberAnimationTimeOut / 1000 + "s " +
            "ease";
    }, numberAnimationTimeOut);

    setTimeout(() => {
        nodes[i].firstChild.style.animation = null;
    }, numberAnimationTimeOut * 2);
}

async function removeIndex(i) {
    if (handleEmptyListError() || checkInputErrors(i, "Index", true))
        return;

    await animateNodes(0, i - 1);
    animateNodesAfterRemove(i + 1);
    deleteNode(i);
}

function removeData(data) {
    if (handleEmptyListError() || checkInputErrors(data, "Data"))
        return;

    removeRecursively(0, data);
}

async function removeRecursively(i, data) {
    if (i >= nodes.length) {
        return;
    } else if (nodes[i].firstChild.innerHTML == data) {
        await deleteNode(i);
        await animateNodesAfterRemove(i)
        removeRecursively(i, data);
    } else {
        await animateNode(i);
        await animatePointer(i);
        removeRecursively(i + 1, data);
    }
}