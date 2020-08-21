module.exports = (script) => 
    `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>My first three.js app</title>
            <style>
                body { margin: 0; }
                canvas { display: block; }
            </style>
        </head>
        <body>
            <script src="https://threejs.org/build/three.min.js"></script>
            <script src = "${script}.js">
            </script>
        </body>
    </html>
    `
