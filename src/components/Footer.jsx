const Footer = () => {
    return (
        <footer class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-4">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div>
                        <h2 class="text-2xl font-bold mb-4">📚 LibraryHub</h2>
                        <p class="text-sm">Your gateway to endless knowledge and discovery. Manage, explore, and borrow your favorite books with ease.</p>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:underline">Home</a></li>
                            <li><a href="#" class="hover:underline">Browse Books</a></li>
                            <li><a href="#" class="hover:underline">My Account</a></li>
                            <li><a href="#" class="hover:underline">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold mb-4">Services</h3>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:underline">Book Borrowing</a></li>
                            <li><a href="#" class="hover:underline">E-Books</a></li>
                            <li><a href="#" class="hover:underline">Research Help</a></li>
                            <li><a href="#" class="hover:underline">Workshops</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul class="space-y-2 text-sm">
                            <li>Email: <a href="mailto:info@libraryhub.com" class="hover:underline">info@libraryhub.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" class="hover:underline">+1 234 567 890</a></li>
                            <li>Address: 123 Knowledge St, Booktown</li>
                        </ul>
                    </div>

                </div>

                <div class="mt-6 border-t border-white/30 pt-3 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>&copy; 2025 LibraryHub. All rights reserved.</p>
                    <div class="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" class="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" class="hover:text-gray-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;