import QRCode from "react-qr-code";

export default function Qrcode() {
    return (
        <div className="p-3 absolute center-0 right-0">
            MENU QR-{" "}
            <QRCode
                value={"www.facebook.com"}
                size={55}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
        </div>
    );
}
