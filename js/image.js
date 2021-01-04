
    function setModal(obj) {
      const modal_inner = document.getElementById('modal_inner');

      modal_inner.innerHTML = `
              <img src="${obj.file_path}" alt="image -${obj.title}">
              <h2>${obj.title}</h2>
              <strong>${obj.author_name}</strong>
              <p>${obj.description}</p>
              <small>${obj.regdate}</small>
    
            `;
    }
    // id 모달인 엘리먼트를 엡솔루트를 줘서 바디태그를 다 덮어버리자
    // 릴레이티브를 받는쪽을 정해보자
    // modal 은 dispaly: none

    function hideModal(e) {
      if(e.target == modal) {
        modal.classList.remove('bg')
      }
    }

    function showModal() {
      modal.classList.add('bg');
    }


    function createE(obj) {
      const el = document.createElement('div');
      el.className = 'item';
      el.innerHTML = `
          <img src="${obj.file_path}" alt="image -${obj.title}">
          <div>
            <strong>${obj.title}</strong>
            <span>${obj.author_name}</span>
          </div>
            `;

      // el.onclick = setModal;

      el.onclick = function () {
        showModal();
        setModal(obj);
      }

      return el;
    }

    function init() {

      var container = document.querySelector('#container');


      const url = './data.json';
      axios.get(url).then(function (res) {

        res.data.forEach(function (obj) {
          container.append(createE(obj));

        })

      })
      
      const modal = document.getElementById('modal');
      modal.onclick = hideModal;
    }

    init();
