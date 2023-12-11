export default function EmailVerify() {
    return (
        <div className="flex justify-center py-4">
            <div className="bg-white text-gray-900 p-4 rounded-md ">
                <p className="text-xl">Verification Email has been sent! </p>

                <form action="" method="post">
                    <button className="bg-gray-900 w-full text-white rounded-md p-2 hover:bg-gray-800 transition-all">
                        Resend Email
                    </button>
                </form>
            </div>
        </div>
    );
}
