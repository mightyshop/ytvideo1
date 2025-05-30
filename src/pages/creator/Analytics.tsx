import React, { useState } from 'react';
import { X } from 'lucide-react';

const Analytics: React.FC = () => {
  const [showAppealModal, setShowAppealModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [appealText, setAppealText] = useState('');
  const [commentText, setCommentText] = useState('');

  const recentUGCSubmissions = [
    {
      id: 1,
      title: 'Product Review Video',
      creator: '@tech_reviewer',
      amount: 150.00,
      status: 'pending',
      thumbnail: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Unboxing Experience',
      creator: '@tech_reviewer',
      amount: 200.00,
      status: 'approved',
      thumbnail: 'https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Product Demo',
      creator: '@tech_reviewer',
      amount: 175.00,
      status: 'rejected',
      thumbnail: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const recentAffiliatePurchases = [
    {
      id: 1,
      title: 'Wireless Headphones',
      buyer: 'John Doe',
      price: 299.99,
      commission: 45.00,
      status: 'pending',
      thumbnail: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Gaming Mouse',
      buyer: 'Jane Smith',
      price: 89.99,
      commission: 13.50,
      status: 'approved',
      thumbnail: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Mechanical Keyboard',
      buyer: 'Mike Johnson',
      price: 129.99,
      commission: 19.50,
      status: 'rejected',
      thumbnail: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const handleAppeal = (submission: any) => {
    setSelectedSubmission(submission);
    setShowAppealModal(true);
  };

  const handleComment = (submission: any) => {
    setSelectedSubmission(submission);
    setShowCommentModal(true);
  };

  const submitAppeal = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appeal submitted:', { submission: selectedSubmission, appeal: appealText });
    setShowAppealModal(false);
    setAppealText('');
    setSelectedSubmission(null);
  };

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comment submitted:', { submission: selectedSubmission, comment: commentText });
    setShowCommentModal(false);
    setCommentText('');
    setSelectedSubmission(null);
  };

  const AppealModal = () => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Submit Appeal</h3>
          <button 
            onClick={() => setShowAppealModal(false)}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={submitAppeal} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Appeal Reason</label>
            <textarea
              value={appealText}
              onChange={(e) => setAppealText(e.target.value)}
              className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Explain why you're appealing this decision..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Submit Appeal
          </button>
        </form>
      </div>
    </div>
  );

  const CommentModal = () => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Add Comment</h3>
          <button 
            onClick={() => setShowCommentModal(false)}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={submitComment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Your Comment</label>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Add your comment..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-400">Performance analytics and insights</p>
      </div>

      {/* Recent UGC Submissions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recent UGC Submissions</h2>
        <div className="space-y-4">
          {recentUGCSubmissions.map(submission => (
            <div key={submission.id} className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={submission.thumbnail} 
                  alt={submission.title} 
                  className="w-24 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{submission.title}</h3>
                      <p className="text-sm text-gray-400">{submission.creator}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-green-500 font-semibold">${submission.amount.toFixed(2)}</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        submission.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                        submission.status === 'approved' ? 'bg-green-500/20 text-green-500' :
                        'bg-red-500/20 text-red-500'
                      }`}>
                        {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleAppeal(submission)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Appeal
                  </button>
                  <button 
                    onClick={() => handleComment(submission)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Add a Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Affiliate Purchases */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Affiliate Purchases</h2>
        <div className="space-y-4">
          {recentAffiliatePurchases.map(purchase => (
            <div key={purchase.id} className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={purchase.thumbnail} 
                  alt={purchase.title} 
                  className="w-24 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{purchase.title}</h3>
                      <p className="text-sm text-gray-400">{purchase.buyer}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      purchase.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                      purchase.status === 'approved' ? 'bg-green-500/20 text-green-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-400">
                      Price: <span className="text-white">${purchase.price.toFixed(2)}</span>
                    </div>
                    <div className="text-gray-400">
                      Commission: <span className="text-green-500">${purchase.commission.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAppealModal && <AppealModal />}
      {showCommentModal && <CommentModal />}
    </div>
  );
};

export default Analytics;