
# 🧠 Text Summarization App

This is a full-stack project that takes any input text and returns a summarized version using a Transformer model. It uses:

- **Node.js + Express** for the backend server
- **Python + Flask** for the text summarization logic (using Hugging Face's `t5-small` model)
- **MongoDB** to store original and summarized texts

---

## 📁 Project Structure

```

miniProject/
├── client/             # React frontend (optional)
├── server/
│   ├── server.js       # Node.js Express server
│   ├── summarize.py    # Python summarization microservice
│   ├── requirements.txt
│   └── .env

````

---

## ⚙️ Requirements

- Node.js (v16 or newer)
- Python 3.7+
- MongoDB (local or Atlas)
- `npm` and `pip`

---

## 🌐 Backend Setup (Node.js + Express)

1. **Go to the server folder**

```bash
cd server
````

2. **Create a `.env` file** with the following:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/summarizerDB
PYTHON_SUMMARIZER_URL=http://127.0.0.1:8000/summarize
```

3. **Install dependencies**

```bash
npm install
```

4. **Run the Node server**

```bash
node server.js
```

---

## 🐍 Python Summarizer Setup (Flask + Transformers)

1. **Install Python libraries**

```bash
pip install -r requirements.txt
```

If you don’t have a `requirements.txt`, use:

```bash
pip install flask flask-cors transformers torch
```

2. **Run the Python service**

```bash
python summarize.py
```

It will run at: `http://127.0.0.1:8000/summarize`

---

## 🧪 Test API

You can use **Postman** or connect your **React frontend** to test.

### POST `/api/summarize`

**Body:**

```json
{
  "text": "The quick brown fox jumps over the lazy dog. This is a test text for summarization."
}
```

**Response:**

```json
{
  "summary": "The fox jumps over the dog."
}
```

---

## 🧠 Model Used

This project uses Hugging Face's [`t5-small`](https://huggingface.co/t5-small) model, fine-tuned for summarization.

---

## 🚀 Future Improvements

* [ ] Add frontend UI
* [ ] Add text upload or article summarization
* [ ] Add summary export to PDF
* [ ] Add authentication (JWT)
