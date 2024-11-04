//* Receiving data from the api

let data; //س تعريف متغير data خارج الدالة get

const get = async () => {
  const response = await fetch("https://dummyjson.com/products/");

  data = await response.json(); // حفظ البيانات في المتغير data

  console.log(data); // علشان استدعي ال data في ال console

  // عرض اسم أول علامة تجارية في #title وفي الوصف في #des في البداية
  document.querySelector("#title").innerHTML = data.products[0].brand;
  document.querySelector("#des").innerHTML = data.products[0].description;
  document.querySelector("#img").src = data.products[0].images[0];

  document.querySelector("#choose").innerHTML = `
                <select class="form-select" id="brandSelect" onchange="updateProductDetails(this.value)">
                    ${data.products
                      .map((product) => {
                        return `<option value="${product.id}">${product.brand}</option>`;
                      })
                      .join("")}
                </select>
            `;
};

// دالة لتحديث الـ title والوصف بناءً على الاختيار
const updateProductDetails = (selectedId) => {
  // إيجاد المنتج بناءً على ID المحدد
  const selectedProduct = data.products.find(
    (product) => product.id == selectedId
  );

  if (selectedProduct) {
    document.querySelector("#title").innerHTML = selectedProduct.brand; // تحديث #title
    document.querySelector("#des").innerHTML = selectedProduct.description; // تحديث #des
    document.querySelector("#img").src = selectedProduct.images[0];
  }
};

get(); // استدعاء الدالة لجلب البيانات
