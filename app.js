const settingsContainer = document.querySelector(".settings_container");
const settingIcon = document.querySelector(".details_div");
const notifiIcon = document.querySelector(".notifi_icon_div");
const closeTileBtn = document.querySelector(".close_btn");
const trialCalloutDiv = document.querySelector(".main_header_msg");
const guideTitle = document.querySelectorAll(".guide_title");

const notificationContainer = document.querySelector(".notification_container");

function closeTile() {
  closeTileBtn.addEventListener("click", handleCloseTileBtn);
}
function handleCloseTileBtn() {
  trialCalloutDiv.classList.add("trial_callout_none");
}
closeTile();
//function to open and close the settings and notifications menu
function menuOpenandClose() {
  notifiIcon.addEventListener("click", toggleNotificationMenuHandler);
  settingIcon.addEventListener("click", toggleSettingsMenuHandler);
}
function closeNotificationsMenuOnBodyClick(event) {
  const isClickInsideDropdown =
    event.target === notificationContainer ||
    notificationContainer.contains(event.target);
  const isClickInsideButton =
    event.target === notifiIcon || notifiIcon.contains(event.target);
  if (!isClickInsideButton && !isClickInsideDropdown) {
    notificationContainer.setAttribute("aria-hidden", true);
    notifiIcon.setAttribute("aria-expanded", false);
    if (notificationContainer.classList.contains("menu_active")) {
      notificationContainer.classList.remove("menu_active");
    }
    const updatedAriaValue = notificationContainer.getAttribute("aria-hidden");
    console.log(updatedAriaValue);
  }
}
function closeSettingsMenuOnBodyClick(event) {
  const isClickInsideDropdown =
    event.target === settingsContainer ||
    settingsContainer.contains(event.target);
  const isClickInsideButton =
    event.target === settingIcon || settingIcon.contains(event.target);
  if (!isClickInsideButton && !isClickInsideDropdown) {
    settingsContainer.setAttribute("aria-hidden", true);
    settingIcon.setAttribute("aria-expanded", false);
    if (settingsContainer.classList.contains("menu_active")) {
      settingsContainer.classList.remove("menu_active");
    }
  }
}
document.addEventListener("click", function (event) {
  if (settingsContainer.getAttribute("aria-hidden") === "false") {
    closeSettingsMenuOnBodyClick(event);
    console.log("closed settings menu");
  } else if (notificationContainer.getAttribute("aria-hidden") === "false") {
    closeNotificationsMenuOnBodyClick(event);
    console.log("closed notification menu");
  }
});
function toggleNotificationMenuHandler(event) {
  const isMenuExpanded =
    notifiIcon.attributes["aria-expanded"].value === "true";
  notificationContainer.classList.toggle("menu_active");
  console.log;

  notificationContainer.setAttribute("aria-hidden", isMenuExpanded);
  if (isMenuExpanded) {
    notifiIcon.ariaExpanded = "false";
    notifiIcon.focus();
  } else {
    const allMenuItems =
      notificationContainer.querySelectorAll("[role=menuitem]");
    notifiIcon.ariaExpanded = "true";
    setTimeout(function () {
      allMenuItems[0].focus();
    }, 30);
    notificationContainer.addEventListener("keyup", function (event) {
      if (event.key === "Escape") {
        toggleNotificationMenuHandler();
      }
      allMenuItems.forEach(function (item, index) {
        item.addEventListener("keyup", function (event) {
          handleNotificationKeyUp(event, index);
        });
      });
    });
  }
}

function toggleSettingsMenuHandler() {
  const isMenuExpanded =
    settingIcon.attributes["aria-expanded"].value === "true";
  settingsContainer.classList.toggle("menu_active");
  const allMenuItems = settingsContainer.querySelectorAll("[role=menuitem]");
  settingsContainer.setAttribute("aria-hidden", isMenuExpanded);
  if (isMenuExpanded) {
    settingIcon.ariaExpanded = "false";
    settingIcon.focus();
  } else {
    settingIcon.ariaExpanded = "true";
    setTimeout(function () {
      allMenuItems[0].focus();
    }, 30);

    settingsContainer.addEventListener("keyup", function (event) {
      if (event.key === "Escape") {
        toggleSettingsMenuHandler();
      }
      allMenuItems.forEach(function (item, index) {
        item.addEventListener("keyup", function (event) {
          handleSettingsMenuKeyUp2(event, index);
        });
      });
    });
  }
}
function handleSettingsMenuKeyUp2(event, index) {
  const allMenuItems = settingsContainer.querySelectorAll("[role=menuitem]");
  const isLastMenuItem = index === allMenuItems.length - 1;
  const isFirstMenuItem = index === 0;

  const nextMenuItem = allMenuItems.item(index + 1);
  const previousMenuItem = allMenuItems.item(index - 1);
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (isLastMenuItem) {
      allMenuItems.item(0).focus();
    } else {
      nextMenuItem.focus();
    }
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      allMenuItems.item(allMenuItems.length - 1).focus();
    } else {
      previousMenuItem.focus();
    }
  }
}
function handleNotificationKeyUp(event, index) {
  const allMenuItems =
    notificationContainer.querySelectorAll("[role=menuitem]");
  const isLastMenuItem = index === allMenuItems.length - 1;
  const isFirstMenuItem = index === 0;
  const nextMenuItem = allMenuItems.item(index + 1);
  const previousMenuItem = allMenuItems.item(index - 1);
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (isLastMenuItem) {
      allMenuItems.item(0).focus();
    } else {
      nextMenuItem.focus();
    }
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      allMenuItems.item(allMenuItems.length - 1).focus();
    } else {
      previousMenuItem.focus();
    }
  }
}
function handleSetupKeyUp2(event, index) {
  const allStepsContainerItem =
    stepsContainer.querySelectorAll("[role=menuitem]");
  const isLastMenuItem = index === allStepsContainerItem.length - 1;
  const isFirstMenuItem = index === 0;

  const nextMenuItem = allStepsContainerItem.item(index + 1);
  const previousMenuItem = allStepsContainerItem.item(index - 1);
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (isLastMenuItem) {
      allStepsContainerItem.item(0).focus();
    } else {
      nextMenuItem.focus();
    }
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      allStepsContainerItem.item(allStepsContainerItem.length - 1).focus();
    } else {
      previousMenuItem.focus();
    }
  }
}
function handleCircleKeyUp2(event, index) {
  const leftGuide = stepsContainer.querySelectorAll(".left_guide_header");

  const allStepsCircle = stepsContainer.querySelectorAll(".circle_icon_div");
  const allStepsGuideTitle = stepsContainer.querySelectorAll(".guide_title");
  const isLastMenuItem = index === allStepsCircle.length - 1;

  const isFirstMenuItem = index === 0;
  const isFirstGuideItem = index === 0;

  const nextMenuItem = allStepsCircle.item(index + 1);

  const previousMenuItem = allStepsCircle.item(index - 1);
  const previousGuideItem = allStepsGuideTitle.item(index - 1);
  if (event.key === "ArrowDown") {
    if (isLastMenuItem) {
      allStepsCircle.item(0).focus();
    } else {
      nextMenuItem.focus();
    }
  }
  if (event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      allStepsCircle.item(allStepsCircle.length - 1).focus();
    } else {
      previousMenuItem.focus();
    }
  }
  if (event.key === "ArrowRight") {
    if (isFirstGuideItem) {
      allStepsGuideTitle.item(allStepsGuideTitle.length - 1).focus();
    } else {
      previousGuideItem.focus();
    }
  }
}
//function to open and close setup Guide card
function toggleMainContainer() {
  const toggleButton = document.querySelector(".right_side_top_header");
  toggleButton.addEventListener("click", toggleMainContainerHandler);
}

//function to open and close each steps
function toggleStepsOnClick() {
  document
    .querySelectorAll(".left_guide_header")
    .forEach(function (clicked, index) {
      clicked.addEventListener("click", function () {
        toggleGuide(index);
      });
    });
}

//function to handle steps by swapping completed and uncompleted svg
function stepCompleted() {
  const ratioComplete = document.querySelector(".ratio_complete");
  const circleDiv = document.querySelectorAll(".circle_icon_div");
  const progressBar = document.querySelector(".progress-bar");
  circleDiv.forEach(function (svgDiv, index) {
    svgDiv.addEventListener("click", function (event) {
      if (svgDiv.children[0].classList.value === "circle_icon") {
        svgDiv.innerHTML = getLoadingIcon();
        setTimeout(function () {
          svgDiv.innerHTML = getCompleteIcon();
          toggleGuide(index + 1);
        }, 500);
      } else {
        svgDiv.innerHTML = getDashedIcon();
      }
      let notContainCount = 0;

      for (let i = 0; i < circleDiv.length; i++) {
        if (!circleDiv[i].children[0].classList.contains("circle_icon")) {
          notContainCount++;
        }
      }
      switch (notContainCount) {
        case 0:
          progressBar.style.width = 0 + "%";
          ratioComplete.textContent = "0/5 completed";
          break;
        case 1:
          progressBar.style.width = 20 + "%";
          ratioComplete.textContent = "1/5 completed";
          break;
        case 2:
          progressBar.style.width = 40 + "%";
          ratioComplete.textContent = "2/5 completed";
          break;
        case 3:
          progressBar.style.width = 60 + "%";
          ratioComplete.textContent = "3/5 completed";
          break;
        case 4:
          progressBar.style.width = 80 + "%";
          ratioComplete.textContent = "4/5 completed";
          break;
        case 5:
          progressBar.style.width = 100 + "%";
          ratioComplete.textContent = "5/5 completed";
          break;
        default:
          progressBar.style.width = 0 + "%";
          ratioComplete.innerHTML = "0/5 completed";
      }
    });
    circleDiv.forEach(function (circle) {
      circle.addEventListener("mouseenter", function () {
        circle.querySelector("circle").setAttribute("stroke-dasharray", "2");
      });
      circle.addEventListener("mouseleave", function () {
        circle.querySelector("circle").setAttribute("stroke-dasharray", "4 6");
      });
    });
  });
}

//function to handle circle icon mouse enter & leave
function progressCircleAnimation() {
  const circleIcon = document.querySelectorAll(".circle_icon");
  circleIcon.forEach(function (circle) {
    circle.addEventListener("mouseenter", function () {
      circle.querySelector("circle").setAttribute("stroke-dasharray", "2");
    });
    circle.addEventListener("mouseleave", function () {
      circle.querySelector("circle").setAttribute("stroke-dasharray", "4 6");
    });
  });
}
menuOpenandClose();
toggleMainContainer();
toggleStepsOnClick();
stepCompleted();
progressCircleAnimation();
/*
EVENTS HANDLERS
 */
// event handler to toggle main container
const toggleButton = document.querySelector(".right_side_top_header");
const container = document.querySelector(".main_section_body");
const stepsContainer = document.querySelector(".steps_wrapper");
function toggleMainContainerHandler() {
  setguideState(0);
  const computedStyles = window.getComputedStyle(container);
  const currentMaxHeight = computedStyles.maxHeight;
  const isMenuExpanded =
    toggleButton.attributes["aria-expanded"].value === "true";
  container.style.maxHeight =
    currentMaxHeight === "200px" ? "fit-content" : "200px";

  stepsContainer.classList.toggle("menu_active", currentMaxHeight === "200px");
  stepsContainer.setAttribute("aria-hidden", isMenuExpanded);

  const allStepsCircle = stepsContainer.querySelectorAll(".left_guide_header");

  const stepsChildren = stepsContainer.children;
  if (isMenuExpanded) {
    toggleButton.ariaExpanded = "false";
    toggleButton.focus();
  } else {
    toggleButton.ariaExpanded = "true";
    setTimeout(function () {
      allStepsCircle[0].children[0].focus();
    }, 40);

    allStepsCircle.forEach(function (item, index) {
      item.addEventListener("keyup", function (event) {
        handleCircleKeyUp2(event, index);
      });
    });
  }

  for (let i = 0; i < stepsChildren.length; i++) {
    const child = stepsChildren[i];
    child.classList.toggle("flex", currentMaxHeight === "200px");
    child.classList.toggle("none", currentMaxHeight === " fit-content");
  }
  toggleButton.innerHTML =
    container.style.maxHeight === "fit-content"
      ? getDropdownIcon()
      : getDropupIcon();
  for (let i = 1; i < stepsChildren.length; i++) {
    const child = stepsChildren[i];

    child.classList.toggle("hidden", currentMaxHeight === "200px");
    child.classList.toggle("visible", currentMaxHeight === " fit-content");

    const childChildren = child.children;

    for (let i = 1; i < childChildren.length; i++) {
      childChildren[0].children[1].classList.toggle("none");
      childChildren[1].classList.toggle("none");
    }
  }
}
function setguideState(toggleIndex) {
  const guides = document.querySelectorAll(".guides");
  guideTitle.forEach(function (guide, index) {
    if (toggleIndex === index) {
      const isMenuExpanded = guide.attributes["aria-expanded"].value === "true";
      guides.forEach(function (guide, index) {
        if (toggleIndex === index) {
          guide.setAttribute("aria-hidden", isMenuExpanded);
        } else {
          guide.setAttribute("aria-hidden", !isMenuExpanded);
        }
      });
      if (isMenuExpanded) {
        guide.ariaExpanded = "false";
        guide.focus();
      } else {
        guide.ariaExpanded = "true";
      }
    } else {
      guide.ariaExpanded = "false";
    }
  });
}
//event handler to toggle the individual guides
function toggleGuide(index) {
  const guides = document.querySelectorAll(".guides");
  setguideState(index);
  guides.forEach(function (guide, guideIndex) {
    const isCurrentGuide = index === guideIndex;

    guide.children[0].children[1].classList.toggle("block", isCurrentGuide);
    guide.children[0].children[1].classList.toggle("none", !isCurrentGuide);
    guide.children[1].classList.toggle("flex", isCurrentGuide);
    guide.children[1].classList.toggle("none", !isCurrentGuide);
    // Toggle classes for the current guide
    guide.classList.toggle("visible", isCurrentGuide);
    guide.classList.toggle("hidden", !isCurrentGuide);
    guide.style.backgroundColor = isCurrentGuide ? "#f3f3f3" : "transparent";
  });
}

/*
FUNCTION TO GET DYNAMIC SVGS
 */
// Function to get the SVG markup for the dropdown icon
function getDropdownIcon() {
  return `<svg
  class="svg_btn"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z"
        fill="#4A4A4A"
      />
    </svg>`;
}

// Function to get the SVG markup for the dropup icon
function getDropupIcon() {
  return `<svg
  class="svg_btn"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z"
        fill="#4A4A4A"
      />
    </svg>`;
}

// Function to get the svg markup for completed icon
function getCompleteIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg>`;
}

// Function to get the svg markup for Dashed icon
function getDashedIcon() {
  return `<svg class="circle_icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke="#8A8A8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
  </svg>`;
}
function getLoadingIcon() {
  return `<svg class="spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
    <path
      d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
      stroke="#303030"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;
}
