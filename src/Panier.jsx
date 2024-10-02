
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function Panier() {
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const card = JSON.parse(localStorage.getItem('card')) || []

  useEffect(() => {
    const total = card.reduce((acc, item) => {
      return acc + (item.newPrice * item.quantity)
    }, 0)
    setTotal(total)
  }, [card])

  const handIncre = (id) => {
    const updateCard = card.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('card', JSON.stringify(updateCard))
    navigate('/Panier')
  }

  const handown = (id) => {
    const updateCard = card.map(item => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('card', JSON.stringify(updateCard))
    navigate('/Panier')
  }

  const handSup = (id) => {
    const updateCard = card.filter(item => item.id !== id)
    localStorage.setItem('card', JSON.stringify(updateCard))
    navigate('/Panier')
  }

  const handleConfirmOrder = () => {
    const orderDetails = card.map(produit => (
      `Produit: ${produit.title}\nQuantité: ${produit.quantity}\nPrix: ${produit.newPrice} FCFA\nTotal: ${produit.newPrice * produit.quantity} FCFA`
    )).join('\n\n');

    const message = `Nouvelle commande reçue:\n\n${orderDetails}\n\nTotal: ${total} Francs`;

    // sendWhatsAppMessage('PHONE_NUMBER', message);

    localStorage.removeItem('card');
    navigate('/Confirmation');
  }

  return (
    <div className='container mx-auto mt-10'>
      <div className='shadow-md my-10'>
        <div className='w-full bg-white px-4 py-10'>
          <div className='flex justify-between border-b pb-8'>
            <h1 className='font-semibold text-xl lg:text-2xl'>Achat</h1>
            <h1 className='font-semibold text-xl lg:text-2xl'>{card.length} Article(s)</h1>
          </div>
          <div className='hidden sm:flex mt-10 mb-5'>
            <h3 className='font-bold text-grey-600 text-xs uppercase w-2/5'>Produit Details</h3>
            <h3 className='font-bold text-center text-xs uppercase w-1/5 mx-8'>Quantité</h3>
            <h3 className='font-bold text-center text-xs uppercase w-1/5 mx-8'>Prix/Unité</h3>
            <h3 className='font-bold text-center text-xs uppercase w-1/5'>Total</h3>
          </div>
          {
            card.map(produit =>
              <div key={produit.id} className='flex flex-col sm:flex-row items-center hover:bg-grey-100 -mx-8 px-6 py-5'>
                <div className='flex w-full sm:w-2/5 mb-4 sm:mb-0'>
                  <div className='w-20'>
                    <img alt='' src={produit.img} className='block sm:hidden' />
                  </div>
                  <div className='flex flex-col justify-between ml-4 flex-grow'>
                    <span className='text-grey-500 text-sm'>{produit.title}</span>
                    <span className='text-grey-500 text-sm hidden md:block'>{produit.category}</span>
                    <button onClick={() => handSup(produit.id)} className='font-bold text-red-500 text-xs'>
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
                <div className='flex justify-center w-full sm:w-1/5 mx-4'>
                  <button onClick={() => handown(produit.id)} className='font-extrabold border-solid bg-blue-200 text-2xl'>-</button>
                  <input className='mx-2 border text-center w-8' type='text' value={produit.quantity} readOnly />
                  <button onClick={() => handIncre(produit.id)} className='font-extrabold border-solid bg-blue-200 text-2xl'>+</button>
                </div>
                <span className='text-center w-full sm:w-1/5  text-grey-500 text-sm '> <b> {produit.newPrice}</b> FCFA</span>
                <span className='text-center w-full sm:w-1/5 font-semibold text-sm'>{produit.newPrice * produit.quantity} FCFA</span>
              </div>
            )
          }
        </div>

        <div className='w-full px-4 py-10'>
          <h1 className='font-semibold text-xl lg:text-2xl border-b pb-8 text-orange-400 hidden sm:block'>-50%</h1>
          <div className='flex justify-between mt-10 mb-5'>
            <span className='font-semibold text-sm uppercase'>Totaux</span>
            <span className='font-semibold text-sm uppercase'>{total} Francs</span>
          </div>
          <div>
            <label className='font-medium inline-block mb-3 text-sm uppercase'>Lieu livraison</label>
            <select className='block p-2 text-grey-600 w-full text-sm'>
              <option>Dakar</option>
              <option>Thies</option>
              <option>Diourbel</option>
              <option>Fatick</option>
            </select>
          </div>
          <div >
            <label className='font-medium inline-block mb-3 text-sm uppercase'>N Telephone</label>
            <input type='text' className='block p-2 text-grey-600 w-full text-sm  ' placeholder='Entrer votre numero' />
          </div>
          <div className='py-10 hidden sm:block'>
            <label className='font-semibold inline-block mb-3 text-sm uppercase'>Code Promo</label>
            <input type='text' placeholder='Entrer votre code' className='p-2 text-sm w-full' />
          </div>
          <div className='border-t mt-8'>
            <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
              <span>Prix Total</span>
              <span>{total} Francs</span>
            </div>
            <button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>Confirmer</button>
            <button
              className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'
              onClick={handleConfirmOrder}
            >
              Confirmer via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panier
