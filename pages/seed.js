export default function SeedPage() {
  return (
    <div style={{ background: "#161616", color: "#fff", fontFamily: "monospace", textAlign: "center", padding: "32px" }}>
      <h1>SERF Seed Generator</h1>
      <div className="controls" style={{ margin: "22px 0" }}>
        <input type="file" accept="image/*" onChange={handleFile} />
        <button onClick={generate}>Generate</button>
      </div>
      <canvas id="canvas" width="512" height="512" style={{ border: "1px solid #444", marginTop: "22px" }} />
      <script dangerouslySetInnerHTML={{
        __html: `
          function handleFile(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
              const img = new Image();
              img.onload = function() {
                const canvas = document.getElementById('canvas');
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              };
              img.src = e.target.result;
            };
            reader.readAsDataURL(file);
          }

          function generate() {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
              const avg = (data[i] + data[i+1] + data[i+2]) / 3;
              data[i] = data[i+1] = data[i+2] = avg;
            }
            ctx.putImageData(imageData, 0, 0);
          }
        `
      }} />
    </div>
  );
}
