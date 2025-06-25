"use client"

import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "@/lib/firebase"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Mail } from "lucide-react"

interface NewsletterSubscriber {
  id: string
  email: string
  name: string
  subscribedAt: string
}

export default function NewsletterSubscribers() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string|null>(null)

  useEffect(() => {
    const q = query(collection(db, "newsletterSubscribers"), orderBy("subscribedAt", "desc"))
    const unsubscribe = onSnapshot(q,
      (querySnapshot: { docs: any[] }) => {
        const subscribersData = querySnapshot.docs.map((doc: { id: string; data: () => any }) => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          subscribedAt: doc.data().subscribedAt
        })) as NewsletterSubscriber[]
        setSubscribers(subscribersData)
        setLoading(false)
      },
      (error: Error) => {
        setError("Failed to load subscribers")
        setLoading(false)
        console.error("Error fetching subscribers:", error)
      }
    )

    return () => unsubscribe()
  }, [])

  const formatDate = (timestamp: any) => {
    if (timestamp?.toDate) {
      return timestamp.toDate().toLocaleString()
    }
    if (timestamp?.seconds) {
      return new Date(timestamp.seconds * 1000).toLocaleString()
    }
    return "Unknown date"
  }

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Mail className="w-6 h-6 mr-2" />
        <h1 className="text-2xl font-bold">Newsletter Subscribers</h1>
      </div>

      {loading ? (
        <p>Loading subscribers...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : subscribers.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Subscribed On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.map((subscriber) => (
              <TableRow key={subscriber.id}>
                <TableCell>{subscriber.email}</TableCell>
                <TableCell>{subscriber.name}</TableCell>
                <TableCell>{formatDate(subscriber.subscribedAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No newsletter subscribers found</p>
      )}
    </div>
  )
}