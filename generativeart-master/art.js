"use strict"

document.addEventListener("DOMContentLoaded", init);
const body = document.querySelector("body");
const artList = document.querySelector("#artworks")

const art1 = document.querySelector("#artwork1")
const art2 = document.querySelector("#artwork2")
const art3 = document.querySelector("#artwork3")
const art4 = document.querySelector("#artwork4")
const art5 = document.querySelector("#artwork5")
const art6 = document.querySelector("#artwork6")
const art7 = document.querySelector("#artwork7")
const art8 = document.querySelector("#artwork8")
const art9 = document.querySelector("#artwork9")

function init() {
    console.log("init")
    artwork1();
    artwork2();
    artwork3();
    artwork4();
    artwork5();
    artwork6();
    artwork7();
    artwork8();
    artwork9();
}

//art1 replicated, altered, replicated, altered, 

function artwork1() {
    console.log("artwork1");
    for (let i=100; i <= 300; i+=20 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.style.width = `${i}px`;
        newDiv.style.height = `${i}px`;
        art1.appendChild(newDiv);
        }
}

function artwork2() {
    console.log("artwork2");
    for (let i=0; i <= 90; i+=10 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.style.width = "200px";
        newDiv.style.height = "200px";
        newDiv.style.transform = `rotate(${i}deg)`
        art2.appendChild(newDiv);
        }
}

function artwork3() {
    console.log("artwork3");
    for (let i=0; i <= 200; i+=10 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("circle");
        newDiv.style.width = `${i}px`;
        newDiv.style.height = `${i}px`;
        art3.appendChild(newDiv);
        }
}

function artwork4() {
    console.log("artwork4");
    for (let i=-90; i <= 90; i+=20 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.style.transform = `translate(${i}px, ${i}px)`
        art4.appendChild(newDiv);
        }
}

function artwork5() {
    console.log("artwork5");
    for (let i=1; i <= 512; i*=2 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("circle");
        newDiv.style.width = `${i/2}px`;
        newDiv.style.height = `${i/2}px`;
        art5.appendChild(newDiv);
        }
}

function artwork6() {
    console.log("artwork6");
    for (let i=-20; i <= 45; i+=5 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("circle");
        newDiv.style.transform = `translate(${i-50}px)`
        newDiv.style.transform = `rotate(${i*4}deg)`
        art6.appendChild(newDiv);
        }
}

function artwork7() {
    console.log("artwork7");
    for (let i=0; i <= 200; i+=10 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("circle");
        newDiv.style.width = `${i}px`;
        newDiv.style.height = `${i}px`;
        newDiv.style.transform = `translate(${i}px, ${-i/2}px)`
        art7.appendChild(newDiv);
        }
}

function artwork8() {
    console.log("artwork8");
    for (let i=50; i <= 200; i+=10 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.style.width = `${i}px`;
        newDiv.style.height = `${i}px`;
        newDiv.style.transform = `translate(${i*2}px)`
        newDiv.style.transform = `rotate(${i}deg)`
        art8.appendChild(newDiv);
        }
}

function artwork9() {
    console.log("artwork9");
    for (let i=50; i <= 200; i+=30 ){
        console.log(i)
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.style.width = `${i}px`;
        newDiv.style.height = `${i}px`;
        art9.appendChild(newDiv);
        }
        for (let i=50; i <= 200; i+=30 ){
            console.log(i)
            const newDiv = document.createElement("div");
            newDiv.classList.add("circle");
            newDiv.style.width = `${i}px`;
            newDiv.style.height = `${i}px`;
            art9.appendChild(newDiv);
            }
    }

