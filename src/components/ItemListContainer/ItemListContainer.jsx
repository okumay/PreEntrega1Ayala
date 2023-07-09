import { collection, getDocs, query, where } from "firebase/firestore";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const itemsCollection = collection(db, "items");

    if (id) {
      const q1 = query(collection(db, "items"), where("categoryId", "==", id));
      getDocs(q1).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
      const q2 = query(
        collection(db, "categories"),
        where("categoryId", "==", id)
      );
      getDocs(q2).then((snapshot) => {
        setCategoryName(snapshot.docs[0].data().categoryName);
      });
    } else {
      getDocs(itemsCollection).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  }, [id]);

  return (
    <div className="main-wrapper">
      <div className="main">
        <ItemList items={products} category={categoryName} {...props} />
      </div>
    </div>
  );
};

export { ItemListContainer };
