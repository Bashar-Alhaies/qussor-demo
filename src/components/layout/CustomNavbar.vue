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
            <b-nav-item  href="/" class="nav-item">الرئيسة</b-nav-item>
            <b-nav-item href="/construction" class="nav-item">أعمالنا</b-nav-item>
            <b-nav-item-dropdown text="قاعات" right >
              <b-dropdown-item href="/construction">قاعات الشرقية</b-dropdown-item>
              <b-dropdown-item href="/construction">قاعت الرياض</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="/construction" class="nav-item">أضف قاعتك</b-nav-item>
            <b-nav-item href="/construction" class="nav-item">طلب تقسيط القاعة</b-nav-item>
            <b-nav-item href="/construction" class="nav-item">تحميل التطبيق</b-nav-item>
            <b-nav-item href="/construction" class="nav-item">المدونة</b-nav-item>
            <b-nav-item-dropdown 
              text="تواصل معنا"
              right>
              <b-dropdown-item href="/construction">عن قصور</b-dropdown-item>
              <b-dropdown-item href="/construction">واتساب</b-dropdown-item>
              <b-dropdown-item href="/construction">راسلنا</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="/construction" class="nav-item">شروط الاستخدام</b-nav-item>
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