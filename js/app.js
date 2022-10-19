const textarea = document.querySelector("textarea");
const remainig = document.querySelector(".remaining");
textarea.setAttribute("maxlength", "250");
const MAX_LENGTH = textarea.maxLength;

textarea.addEventListener("input", (e) => {
  let remainingChars = MAX_LENGTH - e.currentTarget.value.length;
  remainig.innerText = `تعداد کاراکترهای باقیمانده : ${remainingChars}`;
  remainingChars < MAX_LENGTH * 0.1
    ? (remainig.style.color = "crimson")
    : (remainig.style.color = null);
  remainingChars === 0
    ? (remainig.innerText = `حد مجاز به اتمام رسیده است : ${remainingChars}`)
    : "";
});
