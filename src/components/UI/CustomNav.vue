<template>

    <b-collapse is-nav>
       <b-navbar-nav>
            <b-nav-item href="/"  class="nav-item">الرئيسة</b-nav-item>
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