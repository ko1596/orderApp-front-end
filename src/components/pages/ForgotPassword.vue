<template>
    <div class="pt-4 pb-4 bg-gradient-primary">
        <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-2">你忘記密碼了嗎?</h1>

                                            <p class="mb-4">在下方輸入信箱<br>我們將會傳送一組重設密碼的連結到您的信箱</p>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="輸入Email信箱...">
                                        </div>
                                        <a href="login.html" class="btn btn-primary btn-user btn-block">
                                            重設密碼
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <router-link to="/register" class="small">註冊帳號!</router-link>
                                    </div>
                                    <div class="text-center">
                                        <router-link to="/login" class="small">已經有帳號了嗎? 登入吧!</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </div>
</template>