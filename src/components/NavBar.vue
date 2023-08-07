<template>
    <nav class="bg-white shadow-md ">
        <div class="  mx-auto p-4">

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded "
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/#/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 ">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>
