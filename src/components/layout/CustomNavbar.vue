<template>
    <b-navbar toggleable="xl" type="light" variant="light" sticky>
    
      <b-navbar-brand>
        <custom-logo></custom-logo>
      </b-navbar-brand>

       <b-navbar-toggle v-b-toggle.sidebar-no-header target="sidebar-no-header">
      </b-navbar-toggle>

      <custom-nav></custom-nav>
      
      <b-sidebar
        id="sidebar-no-header"
        right shadow no-header
        backdrop>
        <nav id="nav-container">
          <custom-logo></custom-logo>

          <b-nav vertical id="sidebar-container" >

            <b-nav-item class="nav-item">
              <router-link to="/">الرئيسة</router-link>
            </b-nav-item>

            <b-nav-item class="nav-item">
              <router-link to="/construction">أعمالنا</router-link>
            </b-nav-item>

            <b-nav-item-dropdown text="قاعات" right >

              <b-dropdown-item>
                <router-link to="/construction">قاعات الشرقية</router-link>
              </b-dropdown-item>

              <b-dropdown-item>
                <router-link to="/construction">قاعت الرياض</router-link>
              </b-dropdown-item>

            </b-nav-item-dropdown>

            <b-nav-item class="nav-item">
                <router-link to="/construction">أضف قاعتك</router-link>
            </b-nav-item>

            <b-nav-item class="nav-item">
              <router-link to="/construction">طلب تقسيط القاعة</router-link>
            </b-nav-item>

            <b-nav-item class="nav-item">
              <router-link to="/construction">تحميل التطبيق</router-link>
            </b-nav-item>

            <b-nav-item class="nav-item">
              <router-link to="/construction">المدونة</router-link>           
            </b-nav-item>
            
            <b-nav-item-dropdown 
              text="تواصل معنا"
              right>

              <b-dropdown-item>
                <router-link to="/construction">
                   عن قصو
                </router-link>
              </b-dropdown-item>

              <b-dropdown-item>
                <router-link to="/construction">واتساب</router-link>
              </b-dropdown-item>

              <b-dropdown-item>
                <router-link to="/construction">راسلنا</router-link>
              </b-dropdown-item>

            </b-nav-item-dropdown>

            <b-nav-item class="nav-item">
              <router-link to="/construction">شروط الاستخدام</router-link>
            </b-nav-item>

          </b-nav>

        </nav>
      </b-sidebar>
      
    </b-navbar>  

</template>

<script>
import CustomNav from '../UI/CustomNav'
import CustomLogo from '../UI/CustomLogo'
export default {
  name: 'Navbar',
  components: {
    CustomNav,
    CustomLogo
  },
}
</script>

<style >
#sidebar-container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  color: white;
}

.nav-item{
  padding: 10px 0;
  width: 100%;
}
.nav-item:hover {
  background: #333;
}
.nav-item a{
  color: #ffa300 !important;
  font-size: 15px;
}
.nav-item a:hover{
  color: #ffa300;
}

.nav-item a span{
  margin-left: 5px;
} 

#nav-container {
  text-align: center;
}
@media only screen and (min-width: 1200px) {

  .nav-item{
    width: auto;
    margin: 1px;
  }
  .nav-item:hover {
    background: transparent;
  }

}

</style>