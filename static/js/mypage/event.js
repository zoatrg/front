const modalTabbtns = document.querySelectorAll(".modal-sidebar .tab-container");
const changeModalBtns = document.querySelectorAll(".modal-detail .change");
// const modalTabbtn = () => {
    
// }

// 마이페이지 LNB영역 버튼 이벤트
modalTabbtns.forEach(modalTabbtn => {
    modalTabbtn.addEventListener("click", (e) => {
        modalTabbtns.forEach(modalTabbtn => modalTabbtn.classList.remove("active"));
        modalTabbtn.classList.add("active");
    })
    modalTabbtn.addEventListener("mousedown", (e) => {
        modalTabbtn.classList.add("down");
    })
    modalTabbtn.addEventListener("mouseup", (e) => {
        modalTabbtn.classList.remove("down");
    })
    modalTabbtn.addEventListener("mouseout", (e) => {
        modalTabbtn.classList.remove("down");
    })
    
})

changeModalBtns.forEach(changeModalBtn => {
    changeModalBtn.addEventListener("click", (e) => {
        const forms = document.querySelectorAll("#form-modal .form-group");
        const _this = e.currentTarget.id.replace("Change", "");
        const _thisForm = document.getElementById(_this+"Form");
        forms.forEach(form => {
            form.classList.add("none");
        })
        _thisForm.classList.remove("none")
    })
})