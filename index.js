const urlParams = new URLSearchParams(window.location.search);
        const storedName = urlParams.get('name');
        if (storedName) {
            document.querySelector('.message').innerHTML = 'Welcome, '+storedName;
        }
        const storedSecret = localStorage.getItem('secret');
        if (storedSecret) {
            document.querySelector('.message').innerHTML += '<br>Your stored secret is: ' + storedSecret;
        }
        document.getElementById('secret-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const secret = document.getElementById('secret').value;
            const params = new URLSearchParams(window.location.search);
            params.set('name', name);
            history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
            localStorage.setItem('secret', secret);
            document.querySelector('.message').innerHTML = `Welcome, ${name}! Your secret has been stored! Reload to see your secret.`;
                var messageDiv = document.querySelector('.message');
                var scriptTags = messageDiv.querySelectorAll('script');
                scriptTags.forEach(function(script) {
                script.parentNode.removeChild(script);
        });
        });
