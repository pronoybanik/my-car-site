import { useEffect, useState } from "react"

const useSeller = email => {
    const [sellers, setSellers] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/sellers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSellers(data.isSeller)
                    setSellerLoading(false)
                })
        }
    }, [email])
    return [sellers, sellerLoading]
}
export default useSeller;