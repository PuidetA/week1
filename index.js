if (document.readyState !== "loading") {
  console.log("Document has loaded.");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document has loaded!");
    initializeCode();
  });
}

function initializeCode() {
  const helloWorldButton = document.getElementById("my-button");

  helloWorldButton.addEventListener("click", function () {
    console.log("hello world");
    const notebookButtonh1 = document.getElementById("notebookh1");
    notebookButtonh1.innerHTML = "My notebook";
  });

  const addDataButton = document.getElementById("add-data");

  addDataButton.addEventListener("click", function () {
    const unsortedList1 = document.getElementById("ulTesting");
    const textAreaAppend = document.getElementById("text-area");
    const appendable = document.createElement("li");
    appendable.innerHTML = textAreaAppend.value;

    unsortedList1.appendChild(appendable);
  });
}
