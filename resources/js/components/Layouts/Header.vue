<template>

    <!-- Navigation Bar-->
    <header id="topnav">
        <div class="topbar-main">
            <div class="container-fluid">

                <!-- Logo container-->
                <div class="logo">
                    <!-- Text Logo -->
                    <!--<a href="index.html" class="logo">-->
                    <!--<span class="logo-small"><i class="mdi mdi-radar"></i></span>-->
                    <!--<span class="logo-large"><i class="mdi mdi-radar"></i> Adminto</span>-->
                    <!--</a>-->
                    <!-- Image Logo -->
                    <router-link to="/" class="logo">
                        <img src="/adminto/assets/images/logo-sm.png" alt="" height="26" class="logo-small">
                        <img src="/adminto/assets/images/logo.png" alt="" height="24" class="logo-large">
                    </router-link>

                </div>
                <!-- End Logo container-->


                <div class="menu-extras topbar-custom">

                    <ul class="list-unstyled topbar-right-menu float-right mb-0">

                        <li class="menu-item">
                            <!-- Mobile menu toggle-->
                            <a class="navbar-toggle nav-link">
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                            <!-- End mobile menu toggle-->
                        </li>

                        <li>
                            <!-- Notification -->
                            <div class="notification-box">
                                <ul class="list-inline mb-0">
                                    <li>
                                        <a href="javascript:void(0);" class="right-bar-toggle">
                                            <i class="mdi mdi-bell-outline noti-icon"></i>
                                        </a>
                                        <div class="noti-dot">
                                            <span class="dot"></span>
                                            <span class="pulse"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- End Notification bar -->
                        </li>

                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown"
                               href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="/adminto/assets/images/users/avatar-1.jpg" alt="user" class="rounded-circle">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="ti-user m-r-5"></i> Profile
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="ti-settings m-r-5"></i> Settings
                                </a>

                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="ti-lock m-r-5"></i> Lock screen
                                </a>

                                <!-- item-->
                                <a  href="/authentication/logout" class="dropdown-item notify-item">
                                    <i class="ti-power-off m-r-5"></i> Logout
                                </a>

                            </div>
                        </li>

                    </ul>
                </div>
                <!-- end menu-extras -->

                <div class="clearfix"></div>

            </div> <!-- end container -->
        </div>
        <!-- end topbar-main -->

        <Navigation></Navigation>

        <!-- end navbar-custom -->
    </header>
    <!-- End Navigation Bar-->
</template>

<script>
    import Navigation from './Navigation'
    export default {
        name: "Header",
        components: {Navigation},
        methods:{

        }
    }
</script>

<style scoped>

</style>