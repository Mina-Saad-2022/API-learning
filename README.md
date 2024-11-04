<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دليل استخدام الـ API</title>
    <style>
        /* إعدادات الصفحة الأساسية */
        body {
            font-family: "Cairo", sans-serif;
            background-color: #e9ecef;
            color: #333;
            line-height: 1.8;
            direction: rtl;
            margin: 0;
            padding: 0;
        }

        /* إعدادات الصندوق */
        .container {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        }

        /* إعدادات العناوين */
        h1 {
            color: #007bff;
            text-align: center;
            font-size: 2em;
            margin-bottom: 10px;
        }

        h2 {
            color: #17a2b8;
            font-size: 1.5em;
            margin-bottom: 8px;
        }

        /* إعدادات النصوص */
        p {
            font-size: 1.1em;
            color: #555;
            margin-bottom: 20px;
        }

        /* إعدادات الكود */
        .code-block {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            color: #333;
            font-family: "Courier New", monospace;
            border-left: 5px solid #007bff;
            direction: ltr;
            text-align: left;
            overflow-x: auto;
        }

        /* تنسيق التعليقات داخل الكود */
        .code-comment {
            color: #6c757d;
            font-style: italic;
        }

        /* تنسيق الأقسام */
        .section {
            margin-bottom: 30px;
        }

        /* ألوان الروابط */
        a {
            color: #007bff;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>دليل استخدام الـ API - إرسال واستقبال البيانات</h1>
        
        <div class="section">
            <h2>الخطوة 1: إرسال البيانات إلى الـ Backend</h2>
            <p>لإرسال البيانات من الواجهة الأمامية إلى الـ Backend، استخدم طلب <span style="color: #e74c3c;">POST</span>. المثال التالي يوضح كيفية القيام بذلك:</p>
            <div class="code-block">
                <code>
                    <span class="code-comment">// مثال على إرسال البيانات للـ API</span><br>
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
                          console.log(data); <span class="code-comment">// التعامل مع البيانات المستلمة</span><br>
                    };<br>
                    sendData();
                </code>
            </div>
        </div>

        <div class="section">
            <h2>الخطوة 2: استقبال البيانات من الـ Backend</h2>
            <p>لاستقبال البيانات من الـ Backend وعرضها، استخدم طلب <span style="color: #3498db;">GET</span>. المثال التالي يوضح كيفية تنفيذ ذلك:</p>
            <div class="code-block">
                <code>
                    <span class="code-comment">// مثال على استقبال البيانات من الـ API</span><br>
                    const getData = async () => {<br>
                          const response = await fetch('<span style="color: #d35400;">https://your-backend-url.com/api/endpoint</span>');<br>
                          const data = await response.json();<br>
                          console.log(data); <span class="code-comment">// التعامل مع البيانات المستلمة</span><br>
                    };<br>
                    getData();
                </code>
            </div>
        </div>
        
        <div class="section">
            <h2>الخطوة 3: تشغيل الكود</h2>
            <p>قم بكتابة هذا الكود في ملف JavaScript، ثم نفّذ الدوال <code>sendData()</code> و <code>getData()</code> لاختبار الاتصال بالـ API.</p>
        </div>
    </div>
</body>
</html>