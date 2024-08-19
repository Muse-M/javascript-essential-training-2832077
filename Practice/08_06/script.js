/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const function1 = function simpleDeclerationFunction(param) {
    const main = document.querySelector("main")
    main.innerHTML =param
};

let newHTML= `
  <article>
    <h1 class="backpack__name">"Everyday backpack"</h1>
    </article>`
function1(newHTML);

var param2 = `
  <article>
    <h1 class="backpack__name">"New title"</h1>
    </article>`

const function2 = param2 => {
    const main = document.querySelector("main")
    main.innerHTML =param2
}

function2(param2)



