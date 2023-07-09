import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = ({ greeting }) => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (slug) {
      const q1 = query(collection(db, "items"), where("slug", "==", slug));
      getDocs(q1).then((snapshot) => {
        setItem({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() });
      });
    }
  }, [slug]);

  if (!item) {
    return (
      <div className="loading">
        <h2>{greeting}</h2>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...item} />
    </div>
  );
};

export { ItemDetailContainer };
