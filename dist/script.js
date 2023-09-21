"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let checker = "lowerCaseLetters";
    const lowercaseLetters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const uppercaseLetters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[',
        ']', '{', '}', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?', '`', '~'
    ];
    const combinedLetters = [...lowercaseLetters, ...uppercaseLetters];
    const combinedLettersAndNumbers = [...combinedLetters, ...numbers];
    const everything = [...lowercaseLetters, ...uppercaseLetters, ...numbers, ...symbols];
    const map = new Map();
    map.set("lowerCaseLetters", lowercaseLetters);
    map.set("lowerCaseAndUpperCaseLetters", combinedLetters);
    map.set("lowerAndUpperWithNumbers", combinedLettersAndNumbers);
    map.set("lowerAndUpperWithNumbersAndSymbols", everything);
    const lengthOfPassword = 8;
    const myRange = document.getElementById("myRange");
    const numberOfChars = document.getElementById("numberOfChars");
    let passwordText = document.querySelector(".password");
    if (myRange) {
        myRange.addEventListener("input", function () {
            const lengthOfPassword = parseInt(this.value);
            numberOfChars.innerHTML = String(this.value);
        });
    }
    const generateButton = document.getElementById("generate");
    generateButton?.addEventListener("click", function () {
        let text = "";
        let currentArray = map.get(checker);
        for (let i = 0; i < Number(numberOfChars.innerHTML); i++) {
            if (currentArray) {
                let index = Math.floor(Math.random() * currentArray.length);
                text += currentArray[index];
            }
        }
        const passwordOutput = document.querySelector(".password");
        if (passwordOutput) {
            passwordOutput.value = text;
        }
    });
    let copyButton = document.getElementById("copy");
    copyButton?.addEventListener("click", function () {
        let copyText = document.getElementById("password");
        console.log("copied");
        if (copyText) {
            copyText.select();
            document.execCommand("copy");
            copyText.setSelectionRange(copyText.value.length, copyText.value.length);
        }
    });
    const arrayOfOptions = Array.from(document.querySelectorAll(".option"));
    arrayOfOptions.forEach(option => {
        if (option) {
            option.addEventListener("click", function () {
                checker = this.id;
                arrayOfOptions.forEach(element => {
                    if (element !== option) {
                        element.style.borderWidth = "0px";
                    }
                    else {
                        option.style.borderWidth = "10px";
                    }
                });
            });
        }
    });
});
