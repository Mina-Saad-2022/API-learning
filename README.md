# دليل استخدام الـ API - إرسال واستقبال البيانات

<div style="font-family: 'Cairo', sans-serif; background-color: #e9ecef; color: #333; line-height: 1.8; direction: rtl; margin: 0; padding: 20px; max-width: 800px;">
    <h1 style="color: #007bff; text-align: center; font-size: 2em; margin-bottom: 10px;">دليل استخدام الـ API - إرسال واستقبال البيانات</h1>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #17a2b8; font-size: 1.5em; margin-bottom: 8px;">الخطوة 1: إرسال البيانات إلى الـ Backend</h2>
        <p style="font-size: 1.1em; color: #555; margin-bottom: 20px;">لإرسال البيانات من الواجهة الأمامية إلى الـ Backend، استخدم طلب <span style="color: #e74c3c;">POST</span>. المثال التالي يوضح كيفية القيام بذلك:</p>
        <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; color: #333; font-family: 'Courier New', monospace; border-left: 5px solid #007bff; overflow-x: auto;">
<code>
<span style="color: #6c757d; font-style: italic;">// مثال على إرسال البيانات للـ API</span><br>
const sendData = async () => {<br>
    const response = await fetch('<span style="color: #d35400;">https://your-backend-url.com/api/endpoint</span>', {<br>
        method: 'POST',<br>
        headers: {<br>
            'Content-Type': 'application/json'<br>
        },<br>
        body: JSON.stringify({<br>
            name: 'محمد',<br>
            email: 'mohamed@example.com'<br>
        })<br>
    });<br>
    const data = await response.json();<br>
    console.log(data); <span style="color: #6c757d; font-style: italic;">// التعامل مع البيانات المستلمة</span><br>
};<br>
sendData();
</code>
        </pre>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #17a2b8; font-size: 1.5em; margin-bottom: 8px;">الخطوة 2: استقبال البيانات من الـ Backend</h2>
        <p style="font-size: 1.1em; color: #555; margin-bottom: 20px;">لاستقبال البيانات من الـ Backend وعرضها، استخدم طلب <span style="color: #3498db;">GET</span>. المثال التالي يوضح كيفية تنفيذ ذلك:</p>
        <pre style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; color: #333; font-family: 'Courier New', monospace; border-left: 5px solid #007bff; overflow-x: auto;">
<code>
<span style="color: #6c757d; font-style: italic;">// مثال على استقبال البيانات من الـ API</span><br>
const getData = async () => {<br>
    const response = await fetch('<span style="color: #d35400;">https://your-backend-url.com/api/endpoint</span>');<br>
    const data = await response.json();<br>
    console.log(data); <span style="color: #6c757d; font-style: italic;">// التعامل مع البيانات المستلمة</span><br>
};<br>
getData();
</code>
        </pre>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #17a2b8; font-size: 1.5em; margin-bottom: 8px;">الخطوة 3: تشغيل الكود</h2>
        <p style="font-size: 1.1em; color: #555; margin-bottom: 20px;">قم بكتابة هذا الكود في ملف JavaScript، ثم نفّذ الدوال <code>sendData()</code> و <code>getData()</code> لاختبار الاتصال بالـ API.</p>
    </div>
</div>
