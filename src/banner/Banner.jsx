import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // Toast state
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });

  useEffect(() => {
    fetch("https://tofaelislamfaruk01.github.io/ticket-data/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error(err));
  }, []);

  const inProgressCount = taskStatus.length;
  const resolvedCount = resolvedTasks.length;

  const getStatusColor = (status) => {
    if (status === "Open") return "badge-success";
    if (status === "In-Progress") return "badge-warning";
    return "badge-neutral";
  };

  const getPriorityColor = (priority) => {
    if (priority === "HIGH") return "text-red-500";
    if (priority === "MEDIUM") return "text-yellow-500";
    return "text-green-500";
  };

  // Show toast helper
  const showToast = (message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "info" });
    }, 3000); // Hide after 3 seconds
  };

  // Add ticket to Task Status
  const handleAddToTask = (ticket) => {
    if (
      !taskStatus.find((t) => t.id === ticket.id) &&
      !resolvedTasks.find((t) => t.id === ticket.id)
    ) {
      setTaskStatus([...taskStatus, ticket]);
      showToast(`Ticket "${ticket.title}" added to Task Status!`, "info");
    }
  };

  // Complete task
  const handleComplete = (ticketId) => {
    const completed = taskStatus.find((t) => t.id === ticketId);
    if (completed) {
      setTaskStatus(taskStatus.filter((t) => t.id !== ticketId));
      setResolvedTasks([...resolvedTasks, completed]);
      showToast(`Ticket "${completed.title}" marked as resolved!`, "success");
    }
  };

  return (
    <div>
      {/* Toast */}
      {toast.show && (
        <div className="toast toast-top toast-start fixed z-50 m-4">
          <div
            className={`alert ${
              toast.type === "success" ? "alert-success" : "alert-info"
            } shadow-lg`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="card text-white shadow-xl bg-gradient-to-r from-purple-600 to-indigo-500">
          <div className="card-body flex flex-col items-center justify-center text-center py-10 lg:h-[250px]">
            <div>
            <h2 className="text-lg opacity-80">In-Progress</h2>
            <p className="text-5xl font-bold">{inProgressCount}</p>
            </div>
          </div>
        </div>

        <div className="card text-white shadow-xl bg-gradient-to-r from-green-400 to-teal-600">
          <div className="card-body flex flex-col items-center justify-center text-center py-10 lg:h-[250px]">
            <div>
            <h2 className="text-lg opacity-80">Resolved</h2>
            <p className="text-5xl font-bold">{resolvedCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tickets Section */}
      <div className="p-6 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Tickets */}
          <div className="lg:col-span-2">
            <h2 className="text-xl text-black font-semibold mb-4">Customer Tickets</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="card bg-white shadow-md cursor-pointer hover:shadow-xl transition"
                  onClick={() => handleAddToTask(ticket)}
                >
                  <div className="card-body text-black p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-sm">{ticket.title}</h3>
                      <span className={`badge ${getStatusColor(ticket.status)} badge-sm`}>
                        {ticket.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">{ticket.description}</p>
                    <div className="flex justify-between items-center text-xs mt-2">
                      <div>
                        <span className="text-gray-400 mr-2">#{ticket.id}</span>
                        <span className={`font-semibold ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority} PRIORITY
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span>{ticket.customer}</span>
                        <span>{ticket.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          <div>
            <h2 className="text-xl text-black mb-4 font-semibold">Task Status</h2>
            {taskStatus.length === 0 && (
              <p className="text-sm text-gray-400 mb-4">Click a ticket to add it here.</p>
            )}

            {taskStatus.map((ticket) => (
              <div key={ticket.id} className="card bg-white shadow-md mb-4">
                <div className="card-body">
                  <h3 className="font-semibold text-black">{ticket.title}</h3>
                  <button
                    className="btn btn-sm btn-success mt-2"
                    onClick={() => handleComplete(ticket.id)}
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))}

          
            <h2 className="font-semibold text-black mt-6">Resolved Task</h2>
            {resolvedTasks.length === 0 && (
              <p className="text-sm text-gray-400">No resolved tasks yet.</p>
            )}
            {resolvedTasks.map((ticket) => (
              <div
                key={ticket.id}
                className="text-sm text-gray-700 bg-blue-100 py-2 pl-4 mt-1 rounded"
              >
                {ticket.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;