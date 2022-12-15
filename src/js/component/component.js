// 네비 스크롤 이벤트

$(function () {
  $(window).scroll(function () {
    let scrollT2 = $(window).scrollTop();

    if (scrollT2 > 1) {
      $(".nav").addClass("active");
    } else {
      $(".nav").removeClass("active");
    }
  });
});

// 메모 버튼 이벤트

$(function () {
  $(".nav i:first-child").on("click", function () {
    $(".memo_box").removeClass("close");
    $(".memo_box").addClass("active");
  });

  $(".memo_box_btn_box i:first-child").on("click", function () {
    $(".memo_box").removeClass("active");
    $(".memo_box").addClass("close");
  });

  $(".memo_box_btn_box i:last-child").on("click", function () {
    $(".memo_box").removeClass("active");
    $(".memo_box").addClass("close");
    $(".city_box").removeClass("close");
    $(".city_box").addClass("active");
  });
});

// 시티 버튼 이벤트

$(function () {
  $(".nav i:last-child").on("click", function () {
    $(".city_box").removeClass("close");
    $(".city_box").addClass("active");
  });

  $(".city_box_btn_box i:last-child").on("click", function () {
    $(".city_box").removeClass("active");
    $(".city_box").addClass("close");
  });

  $(".city_box_btn_box i:first-child").on("click", function () {
    $(".city_box").removeClass("active");
    $(".city_box").addClass("close");
    $(".memo_box").removeClass("close");
    $(".memo_box").addClass("active");
  });
});

// 메모 이벤트
$(function () {
  const toDoForm = document.getElementById("todo-form");
  const toDoInput = document.querySelector("#todo-form input");
  const toDoList = document.getElementById("todo-list");

  const TODOS_KEY = "todos";

  let toDos = [];

  function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

  function deleteToDo(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

  function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerHTML = `<i class="fa-solid fa-xmark fa-2x"></i>`;
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }

  function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }

  toDoForm.addEventListener("submit", handleToDoSubmit);

  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
});

$(function () {
  // 어드바이스 랜덤
  const advice = [
    {
      quote: "춥고 건조해 감기 걸리기 쉬운 날입니다. 빙판 길을 조심하세요.",
    },
    {
      quote:
        "동장군의 기세가 이어지는 겨울밤 난방기기 사용 시 화재 주의하세요!",
    },
    {
      quote:
        "한파가 지속되므로 야외활동은 가급적 자제하시고 방한 용품을 꼭 착용해주세요.",
    },
    {
      quote:
        "한파로 인하여 계량기 동파와 미끄럼 사고가 자주 발생하니 각별히 유의하세요.",
    },
    {
      quote:
        "비 또는 눈이 얼어 도로가 미끄러운 곳이 많으니 대중교통을 이용해주세요.",
    },
  ];

  const todayAdvice = advice[Math.floor(Math.random() * advice.length)];
  const todayAdviceEl = document.querySelector(".today_box_advice_text");

  todayAdviceEl.innerHTML = todayAdvice.quote;

  // 시간과 요일
  function Clock() {
    let now = new Date();

    // 시간
    (pe = "오전"), (hou = now.getHours());

    if (hou == 0) {
      hou = 12;
    }
    if (hou > 12) {
      hou = hou - 12;
      pe = "오후";
    }

    let time1 = `${pe} ${hou + 1}시`;
    let time1El = document.querySelector(".time1");
    time1El.innerHTML = time1;

    let time2 = `${pe} ${hou + 2}시`;
    let time2El = document.querySelector(".time2");
    time2El.innerHTML = time2;

    let time3 = `${pe} ${hou + 3}시`;
    let time3El = document.querySelector(".time3");
    time3El.innerHTML = time3;

    let time4 = `${pe} ${hou + 4}시`;
    let time4El = document.querySelector(".time4");
    time4El.innerHTML = time4;

    // 요일
    dname = now.getDay();

    let week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];

    // 1번
    let addNum1 = 1;
    let addDname1 = dname + addNum1;

    if (addDname1 >= 7) {
      addDname1 = dname + addNum1 - 7;
    }

    let weekDname1 = week[addDname1];
    let dnameEL1 = document.querySelector(".dname1");
    dnameEL1.innerHTML = weekDname1;
    let dnameEL1_1 = document.querySelector(".dname1_1");
    dnameEL1_1.innerHTML = weekDname1;

    // 2번
    let addNum2 = 2;
    let addDname2 = dname + addNum2;

    if (addDname2 >= 7) {
      addDname2 = dname + addNum2 - 7;
    }

    let weekDname2 = week[addDname2];
    let dnameEL2 = document.querySelector(".dname2");
    dnameEL2.innerHTML = weekDname2;
    let dnameEL2_1 = document.querySelector(".dname2_1");
    dnameEL2_1.innerHTML = weekDname2;

    // 3번
    let addNum3 = 3;
    let addDname3 = dname + addNum3;

    if (addDname3 >= 7) {
      addDname3 = dname + addNum3 - 7;
    }

    let weekDname3 = week[addDname3];
    let dnameEL3 = document.querySelector(".dname3");
    dnameEL3.innerHTML = weekDname3;
    let dnameEL3_1 = document.querySelector(".dname3_1");
    dnameEL3_1.innerHTML = weekDname3;

    // 4번
    let addNum4 = 4;
    let addDname4 = dname + addNum4;

    if (addDname4 >= 7) {
      addDname4 = dname + addNum4 - 7;
    }
    let weekDname4 = week[addDname4];
    let dnameEL4 = document.querySelector(".dname4");
    dnameEL4.innerHTML = weekDname4;
    let dnameEL4_1 = document.querySelector(".dname4_1");
    dnameEL4_1.innerHTML = weekDname4;

    // 5번
    let addNum5 = 5;
    let addDname5 = dname + addNum5;

    if (addDname5 >= 7) {
      addDname5 = dname + addNum5 - 7;
    }
    let weekDname5 = week[addDname5];
    let dnameEL5 = document.querySelector(".dname5");
    dnameEL5.innerHTML = weekDname5;
    let dnameEL5_1 = document.querySelector(".dname5_1");
    dnameEL5_1.innerHTML = weekDname5;

    // 6번
    let addNum6 = 6;
    let addDname6 = dname + addNum6;

    if (addDname6 >= 7) {
      addDname6 = dname + addNum6 - 7;
    }
    let weekDname6 = week[addDname6];
    let dnameEL6 = document.querySelector(".dname6");
    dnameEL6.innerHTML = weekDname6;
    let dnameEL6_1 = document.querySelector(".dname6_1");
    dnameEL6_1.innerHTML = weekDname6;

    // 7번
    let addNum7 = 7;
    let addDname7 = dname + addNum7;

    if (addDname7 >= 7) {
      addDname7 = dname + addNum7 - 7;
    }
    let weekDname7 = week[addDname7];
    let dnameEL7 = document.querySelector(".dname7");
    dnameEL7.innerHTML = weekDname7;
    let dnameEL7_1 = document.querySelector(".dname7_1");
    dnameEL7_1.innerHTML = weekDname7;
  }

  Clock();
});
