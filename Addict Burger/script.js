  //  show the items image

  const addto = document.querySelector('.card .addto');
  const item = document.querySelector('.item');
  const closeItem = document.querySelector('.item i');

  addto.onclick = () =>{
    item.classList.toggle('active')
  }
  closeItem.onclick = () =>{
    item.classList.remove('active')
  }

    /**
   * Easy selector helper function
   */
     const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
  /**
   * Scrolls to an element with header offset
   */
   const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }
  
  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
   let selectHeader = select('#header')
   let selectTopbar = select('#topbar')
   if (selectHeader) {
     const headerScrolled = () => {
       if (window.scrollY > 100) {
         selectHeader.classList.add('header-scrolled')
         if (selectTopbar) {
           selectTopbar.classList.add('topbar-scrolled')
         }
       } else {
         selectHeader.classList.remove('header-scrolled')
         if (selectTopbar) {
           selectTopbar.classList.remove('topbar-scrolled')
         }
       }
     }
     window.addEventListener('load', headerScrolled)
     onscroll(document, headerScrolled)
   }

