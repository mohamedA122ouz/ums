import { useRef, useState } from "react";

const faculties = ["Computer and Information Science",
    "Alsun", "Faculty of Medicine",
    "Agriculture",
    "Arts",
    "Dentistry",
    "Nursing",
    "Specific Education",
    "Science",
    "Ain Shams",
    "Business",
    "Pharmacy",
    "Women",
    "Law",
    "Education",
    "Childhood",
    "Technical Nursing Institute",
    "Archaeology",
    "Environment Studies and Research",
    "Institute of Graduate Studies and Agricultural Research in Arid Regions",
    "GAIB",
    "Faculty of Veterinary Medicine",
    "Faculty of Mass Communication"
];

export default function ComboBox() {
    let [currentSelected, select] = useState(() => faculties[0]);
    let txt = useRef(null);
    let comboBox = useRef(null);
    let selected = useRef(null);
    let showProp = false;
    let [searchArr, updateSearch] = useState(() => faculties);
    function handleSearch(searchValue) {
        if (!searchValue) {
            updateSearch(faculties);
        }
        else if (searchValue) {
            updateSearch(() => {
                return faculties.filter((el) => {
                    el = el.toLowerCase();
                    return el.includes(searchValue.toLowerCase());
                });
            });
        }
    }
    function resetSearch() {
        txt.current.value = "";
        handleSearch();
    }
    function show() {
        selected.current.style.backgroundColor = "#cacaca";
        let i = (searchArr.length * 30) + 57;
        i = i > 200 ? 200 : i;
        comboBox.current.style.height = `${i}px`;
        comboBox.current.style.transition = "250ms";
        setTimeout(() => { comboBox.current.style.height = `auto`; }, 250);
        comboBox.current.id = "comboShow";
        showProp = true;
    }
    function hide() {
        let i = (searchArr.length * 30) + 57;
        i = i > 200 ? 200 : i;
        selected.current.removeAttribute("style");
        comboBox.current.style.height = `${i}px`;
        comboBox.current.style.transition = "250ms";
        setTimeout(() => {
            comboBox.current.style.height = "0px";
        }, 2);
        showProp = false;
        comboBox.current.id = "comboHide";
    }
    function handleShow(click) {
        if (click) {
            if (!showProp) {
                show();
            }
            else {
                hide();
            }
        }
        else {
            hide();
        }
    }

    return (
        <>
            <div id="currentSelected" onClick={() => { handleShow(true); }}><span tabIndex={-1} ref={selected}>{currentSelected}</span>
            </div>
            <div className="ComboBox" ref={comboBox}>
                <input type="text" ref={txt} onKeyUp={(event) => {

                    handleSearch(txt.current.value);

                }} />
                {searchArr.map((el, i) => {
                    return <div key={"key" + i} className={el === currentSelected ? "selectedElement element" : "element"} onClick={() => {
                        select(el);
                    }}><span onClick={() => { hide(); resetSearch(); }}>{el}</span></div>
                })}
            </div>
        </>
    );
}