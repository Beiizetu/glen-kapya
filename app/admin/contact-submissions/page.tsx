"use client"

import { useEffect, useState } from "react"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import db from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { format } from "date-fns"

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}

export default function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      console.log("Initializing Firestore query...")
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"))
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          console.log("Received snapshot with", querySnapshot.size, "documents")
          const submissionsData: ContactSubmission[] = []
          querySnapshot.forEach((doc) => {
            submissionsData.push({ id: doc.id, ...doc.data() } as ContactSubmission)
          })
          setSubmissions(submissionsData)
          setLoading(false)
        },
        (error) => {
          console.error("Firestore error:", error)
          setLoading(false)
        }
      )

      return () => {
        console.log("Cleaning up subscription...")
        unsubscribe()
      }
    } catch (error) {
      console.error("Initialization error:", error)
      setLoading(false)
    }
  }, [])

  const formatDate = (timestamp: any) => {
    if (timestamp?.toDate) {
      return format(timestamp.toDate(), "MMM dd, yyyy HH:mm")
    }
    if (timestamp?.seconds) {
      return format(new Date(timestamp.seconds * 1000), "MMM dd, yyyy HH:mm")
    }
    return "Unknown date"
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Form Submissions</h1>
      
      {loading ? (
        <p>Loading submissions...</p>
      ) : submissions.length === 0 ? (
        <p>No submissions found</p>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.phone}</TableCell>
                  <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
                  <TableCell>{formatDate(submission.createdAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}