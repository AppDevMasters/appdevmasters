
<!doctype html>
<html lang="en" class="h-100">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="76x76" href="img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png">
    <link rel="manifest" href="img/favicons/site.webmanifest">
    <link rel="mask-icon" href="img/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <title>Activation account TaskIT</title>

    <link rel="canonical" href="https://taskit.pro/activation.php">
    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- Favicons -->

    <!-- Custom styles for this template -->
    <link href="https://taskit.pro/css/style.css?<?php echo rand(1, 99999999); ?>" rel="stylesheet">
</head>
<body class="d-flex h-100 text-center text-white sing-in">

<div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto d-flex">
        <a href="https://taskit.pro"><img src="https://taskit.pro/img/logo-footer.svg" alt="Logo" class="logo sing-in__logo"></a>
    </header>

    <main class="px-3">
        <div class="activated">
            <h1>The token is correct activation was successful</h1>
            <p class="lead">
                <a href="#" class="btn btn-lg btn-login">Login</a>
            </p>
        </div>
        <div class="unactivated">
            <h1>The token is incorrect </h1>
        </div>
    </main>

    <footer class="mt-auto text-muted">
        <p class="lead center fw-normal fs-6">&copy 2021 IBS Expert LTD. All Rights Reserved.</p>
    </footer>
</div>



</body>
</html>