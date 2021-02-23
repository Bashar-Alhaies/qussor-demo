<template>

    <b-collapse is-nav>
       <b-navbar-nav>
         
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
      </b-navbar-nav>
    </b-collapse>

</template>


<script>
export default {
  name:'CustomNav',
}
</script>

<style>

</style>