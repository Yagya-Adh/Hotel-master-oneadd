<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
</head>
<body class="antialiased">
  
            <div class="w-6/12 p-4 rounded-lg bg-white">
                <p>Verification Email has been sent!</p>
                 <form action="{{route('verification.send')}}" method="POST">
                    @@csrf
                    <button  class="bg-gray-900 text-white" type="submit">Resend Email</button>
                </form>
            </div>
  
</body>
</html>