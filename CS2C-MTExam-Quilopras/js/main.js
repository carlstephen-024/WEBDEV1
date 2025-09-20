
/* js/main.js */
document.addEventListener('DOMContentLoaded', ()=>{
  // simple cart logic
  const cart = {};
  const cartCountEl = document.getElementById('cart-count');
  function updateCartUI(){
    const total = Object.values(cart).reduce((s,q)=>s+q,0);
    cartCountEl.textContent = total;
  }
  document.querySelectorAll('.add-cart').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.productId;
      cart[id] = (cart[id]||0)+1;
      updateCartUI();
    });
  });
  document.querySelectorAll('.remove-cart').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.productId;
      if(cart[id]){ cart[id]--; if(cart[id]<=0) delete cart[id]; updateCartUI(); }
    });
  });
  // contact form basic validation
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      const name = contactForm.querySelector('[name=name]').value.trim();
      const title = contactForm.querySelector('[name=title]').value.trim();
      const message = contactForm.querySelector('[name=message]').value.trim();
      if(!name || !message){ alert('Please provide your name and message.'); return; }
      alert('Thank you, '+name+'! Your message was submitted.');
      contactForm.reset();
    });
  }
});
