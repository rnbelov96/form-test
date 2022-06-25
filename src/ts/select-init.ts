export {};

const isFirstOptionSelected = true;

const customSelectWrapperElList = [
  ...document.querySelectorAll('.js-custom-select'),
] as HTMLDivElement[];

const closeAllSelect = (element: HTMLDivElement | null) => {
  const arrNo = [];

  const optionsListElList = document.querySelectorAll('.select-items');
  const selectedOptionElList = document.querySelectorAll('.select-selected');
  for (let i = 0; i < selectedOptionElList.length; i += 1) {
    if (element === selectedOptionElList[i]) {
      arrNo.push(i);
    } else {
      selectedOptionElList[i].classList.remove('select-arrow-active');
    }
  }
  for (let i = 0; i < optionsListElList.length; i += 1) {
    if (arrNo.indexOf(i)) {
      optionsListElList[i].classList.add('select-hide');
    }
  }
};

customSelectWrapperElList.forEach((customSelectWrapperEl, index) => {
  const selectEl = customSelectWrapperEl.querySelector(
    'select',
  ) as HTMLSelectElement;
  const optionsLength = selectEl.length;
  const selectedOptionDivEl = document.createElement('DIV');
  selectedOptionDivEl.classList.add('js-select-selected');
  selectedOptionDivEl.setAttribute('tabindex', '0');
  selectedOptionDivEl.innerHTML = selectEl.options[selectEl.selectedIndex].innerHTML;
  selectedOptionDivEl.setAttribute(
    'data-select-option-value',
    String(selectEl.options[selectEl.selectedIndex].value),
  );
  customSelectWrapperElList[index].appendChild(selectedOptionDivEl);
  const optionContainerEl = document.createElement('DIV');
  optionContainerEl.classList.add('js-select-items', 'js-select-hide');
  for (let i = 1; i < optionsLength; i += 1) {
    const optionDivEl = document.createElement('DIV');
    if (isFirstOptionSelected && i === 1) {
      optionDivEl.classList.add('js-same-as-selected');
    }
    optionDivEl.innerHTML = selectEl.options[i].innerHTML;
    optionDivEl.setAttribute(
      'data-select-option-value',
      selectEl.options[i].value,
    );
    optionDivEl.setAttribute('tabindex', '0');
    optionDivEl.addEventListener('click', e => {
      const clickedOption = e.currentTarget as HTMLDivElement;
      for (let j = 0; j < optionsLength; j += 1) {
        if (selectEl.options[i].innerHTML === clickedOption.innerHTML) {
          selectEl.selectedIndex = i;
          selectedOptionDivEl.innerHTML = clickedOption.innerHTML;
          selectEl.value = String(clickedOption.dataset.selectOptionValue);
          clickedOption.parentElement
            ?.querySelector('.js-same-as-selected')
            ?.classList.remove('js-same-as-selected');
          clickedOption.classList.add('js-same-as-selected');
          break;
        }
      }
      selectedOptionDivEl.click();
    });
    optionDivEl.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        const clickedOption = e.currentTarget as HTMLDivElement;
        for (let j = 0; j < optionsLength; j += 1) {
          if (selectEl.options[i].innerHTML === clickedOption.innerHTML) {
            selectEl.selectedIndex = i;
            selectedOptionDivEl.innerHTML = clickedOption.innerHTML;
            selectEl.value = String(clickedOption.dataset.selectOptionValue);
            clickedOption.parentElement
              ?.querySelector('.js-same-as-selected')
              ?.classList.remove('js-same-as-selected');
            clickedOption.classList.add('js-same-as-selected');
            break;
          }
        }
        selectedOptionDivEl.click();
        selectedOptionDivEl.focus();
      }
    });
    optionContainerEl.appendChild(optionDivEl);
  }
  customSelectWrapperElList[index].appendChild(optionContainerEl);
  selectedOptionDivEl.addEventListener('click', e => {
    const clickedEL = e.currentTarget as HTMLDivElement;
    e.stopPropagation();
    closeAllSelect(clickedEL);
    clickedEL.nextElementSibling?.classList.toggle('js-select-hide');
    clickedEL.classList.toggle('js-select-arrow-active');
  });
  selectedOptionDivEl.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      const clickedEL = e.currentTarget as HTMLDivElement;
      e.stopPropagation();
      closeAllSelect(clickedEL);
      clickedEL.nextElementSibling?.classList.toggle('js-select-hide');
      clickedEL.classList.toggle('js-select-arrow-active');
    }
  });
});

document.addEventListener('click', () => {
  closeAllSelect(null);
});
