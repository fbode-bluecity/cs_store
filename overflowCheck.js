

const getDocumentTree = () => {
    docBody = document.getElementsByTagName("BODY")[0]
    console.log(body)
}

function GetContainerSize() {
    var container = document.querySelector(".module-bundle");
    var message =
      "The width of the contents with padding: " +
      container.scrollWidth +
      "px.\n";
    message +=
      "The height of the contents with padding: " +
      container.scrollHeight +
      "px.\n";

    console.log(message);
}

GetContainerSize()

getDocumentTree()