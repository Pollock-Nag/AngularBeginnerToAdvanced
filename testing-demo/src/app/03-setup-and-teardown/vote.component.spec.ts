import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  // Arrange
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });
  
  it('should increment totalVotes when upvoted', () => {
    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downVoted', () => {
    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
