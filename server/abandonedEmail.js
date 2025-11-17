export function abandonedEmailTemplate(checkoutUrl, items) {
    return `
    <div style="font-family:Poppins,Arial;">
      <h2>Your items are still waiting! 🛍️</h2>
      <p>You added these items to your cart but didn’t complete checkout:</p>
  
      <ul>
        ${items
          .map(
            (i) => `<li><b>${i.name}</b> — £${i.price} × ${i.quantity}</li>`
          )
          .join("")}
      </ul>
  
      <a href="${checkoutUrl}"
         style="display:inline-block;padding:12px 20px;background:#4ac5c7;color:white;border-radius:5px;text-decoration:none;">
         Complete Your Order
      </a>
  
      <p>Here's a 5% OFF coupon if you complete your checkout today:</p>
      <h2 style="background:#f1f1f1;width:120px;padding:8px;text-align:center;border-radius:8px;">FINISH5</h2>
    </div>
    `;
  }

  